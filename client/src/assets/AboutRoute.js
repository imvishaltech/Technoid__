import React, { useState, useEffect, useRef } from 'react';
import "./AboutRouteStyles.css";

import VideoBack2 from "../assets/VideoBack2.mp4";

const AboutRoute= (props) => {
    const [isVisible, setIsVisible] = useState(true);
    const ref = useRef(null);

    const handleScroll = () => {
        const el = ref.current;
        if (el) {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
            setIsVisible(isVisible);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div> <h1 id="h1_2Tag">Who Are We?</h1>
        <p id="about_tag">Empowering Your Business to Reach New Heights with Cutting-Edge Technology Solutions and Unwavering Expertise</p>
        <div className={`technoid3 ${isVisible ? "fadeIn" : "fadeOut"}`} ref={ref}>
            <div className="mask2">
      <video autoPlay
      loop
      muted
      playsInline
      className='video-background_2'>
                
      <source id="video-background_2"  src={VideoBack2}   type="video/mp4" />

                </video>
            </div>

            <div className="heading">
                <h1 id="h1_2Tag">{props.heading}</h1>
                <p id="about_tag">{props.text}</p>
            </div>
        </div>
        </div>
    )
}
export default AboutRoute;

// <img id="consult"  src={About_img} alt="consulting-2" className="img-fluid" />
