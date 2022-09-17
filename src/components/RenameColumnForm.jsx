import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput.jsx";

const RenameColumnForm = ({ rename, column}) => {
    const [title, setTitle] = useState({title: ""});

    const addNew = (e) => {
        e.preventDefault();
        const newTitle = {...title};
        rename(column, newTitle.title);
        setTitle({title: ""});
    };

    return (
        <form onSubmit={addNew}>
            <MyInput
                value={title.title}
                onChange={(e) => setTitle({title: e.target.value})}
                type="text"
                placeholder="Имя колонки"
            />
            <MyButton>Переименовать</MyButton>
        </form>
    );
};

export default RenameColumnForm;