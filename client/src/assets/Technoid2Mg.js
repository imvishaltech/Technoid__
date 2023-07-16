
import React, { useState, useEffect, useRef } from 'react';
import "./Technoid2MgStyles.css";
// import technoid2_Img from "../assets/Technoid2Bg-Img.jpg";
import consulting_2 from"../assets/consulting_2.jpg";

const Technoid2MgStyles = (props) => {
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

    return (<div >
        <div className={`technoid2 ${isVisible ? "fadeIn" : "fadeOut"}`} ref={ref}>
            <div className="consultcontact_2">
                
                <img id="consult_contact"  src={consulting_2} alt="consulting-2" />
            </div>

            <div className="heading">
                <h1 id="h1_Tag">{props.heading}</h1>
                <p id="ptag">{props.text}</p>
            
                </div>
        </div>
       
        <div id="heading_2">
        <p className="P_tag1" >{props.head2}</p>
        <p className="P_tag2">{props.text2}</p>
        </div>
    
        </div>
    )
};

export default Technoid2MgStyles;
