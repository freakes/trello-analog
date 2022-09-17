import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput.jsx";

const AddColumnForm = ({ create, columnsList}) => {
    const [column, setColumn] = useState({id: -1, order: -1, title: "", items: []});

    const addNew = (e) => {
        e.preventDefault();
        const newEl = {
            ...column,
            id: columnsList.length + 1,
            order: columnsList.length + 1
        };
        create(newEl);
        setColumn({ id: -1 , order: -1, title: "", items: []});
    };

    return (
        <form onSubmit={addNew}>
            <MyInput
                value={column.title}
                onChange={(e) => setColumn({ ...column, title: e.target.value })}
                type="text"
                placeholder="Название колонки  "
            />
            <MyButton>Создать колонку</MyButton>
        </form>
    );
};

export default AddColumnForm;