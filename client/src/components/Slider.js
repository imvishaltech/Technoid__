import React,{useState, useEffect} from "react";
import "./SliderStyles.css";
import SliderData from '../assets/SliderData'

const Slider = () => {
const[people] =useState(SliderData);
const [index, setIndex]= useState(0);

useEffect(()  =>{
    const lastIndex = people.length - 1;
    if(index < 0){
        setIndex(lastIndex);
    }  
    if(index > lastIndex){
        setIndex(0);
    }
}, [index, people] );

useEffect(()=>{
    let Slider = setInterval(()=>{
        setIndex(index + 1)

    },5000);
    return ()=>{
        clearInterval(Slider);
    }
}, [index])

return (
    <div id="slider_M">
    <section className="section">     
       <div className= "title">
       <h2> </h2>
       </div>
       <div className="section-center">
       {people.map((item, indexPeople)=>{
        const {id,image,name,title,qoute} = item;
        let position = "nextSLide";
        if (indexPeople === index){
            position = "activeSlide"
        }
        if (indexPeople === index -1 || (index === 0 && indexPeople===people.length -1)){
            position = "lastSlide"
        }
        return (
            <article className={`${position} slide`} key={id}>
            <img src={image} alt={name} className="person-img" />
            <h4 id="nameH4">{name}</h4>

            <p className="title1">{title}</p>
            <p className="text1">{qoute}</p>
            </article>
        );
       })}
       </div>
       </section> 
       </div>
       );
    };

    export default Slider;










/////////////////////////////////////////////



// import React from 'react';
// import {Swiper, SwiperSlide} from "swiper/react";
// import "./SliderStyles.css";

// // import "swiper/css/swiper.css";
// import Personal1 from "../components/Personal1.jpeg"
// import Personal2 from "../components/Personal2.jpeg"
// import Personal3 from "../components/Personal3.jpeg"
// import Personal4 from "../components/Personal4.jpeg"

// const slides = [Personal1, Personal2, Personal3, Personal4];

// export const Slider = () =>(
//     <Swiper loop spaceBetween={10} slidesPerView={3} >
    
//     {slides.map (( slide) => ( 
//         <SwiperSlide>
//         <img id="slider_tag" src={slide} alt="images" />
//         </SwiperSlide>  
    
//     ))}
//     </Swiper>
// );

// export default Slider;


///////////////////////////


