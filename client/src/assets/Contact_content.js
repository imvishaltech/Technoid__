import React, { useState, useEffect, useRef } from 'react';
import "./Contact_contentStyles.css";
// import technoid2_Img from "../assets/Technoid2Bg-Img.jpg";
import consulting_2 from"../assets/consulting_2.jpg";

const ContactContent = (props) => {
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
        <div className="contact-content-container">
            <div className={`technoid2 ${isVisible ? "fadeIn" : "fadeOut"}`} ref={ref}>
                <div className="consult-contact-image-container">
                    <img src={consulting_2} alt="consulting-2" />
                </div>
    
                <div className="heading-container">
                    <h1 id="h3-tag">{props.heading}</h1>
                    <p id="p4-tag">{props.text}</p>
                </div>
            </div>
        
            
        </div>
    )
    };
    export default ContactContent;