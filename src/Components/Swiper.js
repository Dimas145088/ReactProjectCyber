import React, { useEffect, useState } from "react";
import Slider1 from "../img_header/header-background-img.jpg";
import Slider2 from "../img_header/header-background-img2.jpg";
import Slider3 from "../img_header/header-background-img3.jpg";


const image = [
    <img key={Slider1} src={Slider1}></img>,
    <img key={Slider2} src={Slider2}></img>,
    <img key={Slider3} src={Slider3}></img>
]


function Swiper() {

    const [activeIndex,setActiveIndex] = useState(0)
    useEffect(() =>{
        const interval = setInterval(() => {
            setActiveIndex( (current) => 
                current === image.length - 1? 0:current + 1
            )
        },5000)
        return () => clearInterval()
    },[])

    const prevImageIndex = activeIndex? activeIndex - 1: image.length - 1;
    const nextImageIndex = activeIndex === image.length - 1? 0: activeIndex + 1

  return (
    <div className="slider">
        <div className="slider_img slider_img_prev" key={prevImageIndex}>{image[prevImageIndex]}</div>
        <div className="slider_img" key={activeIndex}>{image[activeIndex]}</div>
        <div className="slider_img slider_img_next" key={nextImageIndex}>{image[nextImageIndex]}</div>
    </div>
  )
}


export default Swiper;