import React from "react";
import { Carousel } from "react-bootstrap";
import Slider1 from "../img_header/header-background-img.jpg";
import Slider2 from "../img_header/header-background-img2.jpg";
import Slider3 from "../img_header/header-background-img3.jpg";

class Slider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slider">
            <Carousel>
                <Carousel.Item>
                    <img className="background_img" src={Slider1} alt="Slider1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="background_img" src={Slider2} alt="Slider1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="background_img" src={Slider3} alt="Slider1" />
                </Carousel.Item>
            
            </Carousel>
            </div>
        );
    }
}

export default Slider;
