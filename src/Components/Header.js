import React from "react";
import { ReactComponent as Cyber } from "../img_header/Cyberpunk_2077_logo 1.svg";
import { ReactComponent as YuoTube } from "../img_header/youtube logo.svg";
import { ReactComponent as Vk } from "../img_header/vk logo.svg";
import { ReactComponent as Facebook } from "../img_header/facebook-rect logo.svg";
import { ReactComponent as Twitter } from "../img_header/twitter-square logo.svg";
import { ReactComponent as Twitch } from "../img_header/twitch logo.svg";
import { ReactComponent as Instagram } from "../img_header/instagram-square logo.svg";
import Slider from "./Slider";
import Swiper from "./Swiper";





class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="background_img">
            <Slider/>
                <div className="header_nav container " >
                    <span className="logo">
                        <a href="#">
                            <Cyber />
                        </a>
                    </span>
                    <ul className="menu_header">
                        <li className="items_menu_header">
                            <a href="#">
                                <YuoTube />
                            </a>
                        </li>
                        <li className="items_menu_header">
                            <a href="#">
                                <Vk />
                            </a>
                        </li>
                        <li className="items_menu_header">
                            <a href="#">
                                <Facebook />
                            </a>
                        </li>
                        <li className="items_menu_header">
                            <a href="#">
                                <Twitter />
                            </a>
                        </li>
                        <li className="items_menu_header">
                            <a href="#">
                                <Twitch />
                            </a>
                        </li>
                        <li className="items_menu_header">
                            <a href="#">
                                <Instagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
