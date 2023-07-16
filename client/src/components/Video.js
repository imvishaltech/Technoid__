import React from 'react';
import "./VideoStyles.css";
import Background_Video from "../assets/Background_Video.mp4";

const Video = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='video-background'
      >
        <source src={Background_Video} type="video/mp4" />
      </video>
      <div class="gradient-line"></div>
    </div>
  );
};


export default Video;


