import React, { useState, useEffect } from "react";
// import  "./SLiderShowStyles.css";

import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";

function SlideShow() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((slideIndex + 1) % 6);
    }, 3000);
    return () => clearTimeout(timer);
  }, [slideIndex]);

  return (
    <div className="slideshow-container">
      <img
        className="mySlides"
        src={one}
        alt="Slide 1"
        style={{ display: slideIndex === 0 ? "block" : "none", width: "150px", height: "150px" , marginLeft: "-26px"}}
      />

      <img
        className="mySlides"
        src={two}
        alt="Slide 2"
        style={{ display: slideIndex === 1 ? "block" : "none" , width: "150px", height: "150px", marginLeft: "-26px"}}
      />

      <img
        className="mySlides"
        src={three}
        alt="Slide 3"
        style={{ display: slideIndex === 2 ? "block" : "none", width: "150px", height: "150px",  marginLeft: "-26px"}}
      />

      <img
        className="mySlides"
        src={four}
        alt="Slide 4"
        style={{ display: slideIndex === 3 ? "block" : "none" , width: "150px", height: "150px", marginLeft: "-26px"}}
      />

      <img
        className="mySlides"
        src={five}
        alt="Slide 5"
        style={{ display: slideIndex === 4 ? "block" : "none", width: "150px", height: "150px" , marginLeft: "-26px"}}
      />

      <img
        className="mySlides"
        src={six}
        alt="Slide 6"
        style={{ display: slideIndex === 5 ? "block" : "none", width: "150px", height: "150px", marginLeft: "-26px" }}
      />
    </div>
  );
}

export default SlideShow;
