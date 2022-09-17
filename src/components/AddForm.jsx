import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput.jsx";

const AddForm = ({ create, column}) => {
    const [card, setCard] = useState({ title: "", id: -1 });

    const addNew = (e) => {
        e.preventDefault();
        const newEl = {
            ...card,
            id: column.items.length,
        };
        create(column, newEl);
        setCard({ title: "", id: -1 });
    };

    return (
        <form onSubmit={addNew}>
            <MyInput
                value={card.title}
                onChange={(e) => setCard({ ...card, title: e.target.value })}
                type="text"
                placeholder="Название карточки  "
            />
            <MyButton>Создать карточку</MyButton>
        </form>
    );
};

export default AddForm;