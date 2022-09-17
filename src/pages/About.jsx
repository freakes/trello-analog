import React from 'react';
import "../App.css"
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className={"about__page"}>
            <h2>Органайзер задач (аналог платформы Trello).</h2>
            <br/>
            <Link to={"/"}>Вернуться на главную</Link>
        </div>
    );
};

export default About;