import React from 'react';
import classes from './MyHeader.module.css'
import MyButton from "../button/MyButton";
import {Link} from "react-router-dom";

const MyHeader = ({setModal}) => {
    return (
        <div className={classes.header}>
            <MyButton className={classes.create_column_button} onClick={() => setModal(true)}>Создать колонку</MyButton>
            <h2>Trello</h2>
            <Link to={"/About"}>О нас</Link>
        </div>
    );
};

export default MyHeader;