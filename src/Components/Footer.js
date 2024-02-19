import React from "react";
import { ReactComponent as Cyber } from "../img_header/Cyberpunk_2077_logo 1.svg";
import Project from "../img_main/CD_Projekt_logo 1.svg";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
            <div className="container">
                <div className="footer_img">
                    <Cyber />
                    <img src={Project}></img>
                    <p className="text_foot">
                        Лицензия
                    </p>
                    <p className="text_foot">Политика конфиденциальности</p>
                </div>
            </div>
            <p className="text_footer">CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</p>
            </footer>
        );
    }
}

export default Footer;
