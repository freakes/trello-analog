import React from 'react';
import Card from "./Card.jsx";
import MyButton from "./UI/button/MyButton";

const ColumnItem = ({columnsList, title, cardList, ...props}) => {

    function dragStartHandlerc(e, column, item) {
        props.setCurrentColumn(column)
        props.setCurrentCard(item)
    }

    function dragOverHandlerc(e) {
        e.preventDefault()
        e.target.style.boxShadow = '0 4px 3px gray'
    }

    function dragLeaveHandlerc(e) {
        e.target.style.boxShadow = 'none'
    }

    function dragEndHandlerc(e) {
        e.target.style.boxShadow = 'none'
    }

    function dropHandlerc(e, column, item) {
        if ((e.target.className === "card" && props.dragStartTargetClassName === "card")) {
            e.preventDefault()
            const currentIndex = props.currentColumn.items.indexOf(props.currentCard);
            props.currentColumn.items.splice(currentIndex, 1);
            const dropIndex = column.items.indexOf(item);
            column.items.splice(dropIndex + 1, 0, props.currentCard);

            props.setColumnList(columnsList.map(c => {
                if (c.id === column.id) {
                    return column
                }
                if (c.id === props.currentColumn.id) {
                    return props.currentColumn
                }
                return c
            }))
        }
        e.target.style.boxShadow = 'none'
        }

    return (
        <div className={"column__item"}
             draggable={props.draggable}
             onDragStart={props.onDragStart}
             onDragLeave={props.onDragLeave}
             onDragEnd={props.onDragEnd}
             onDragOver={props.onDragOver}
             onDrop={props.onDrop}
        >
            <div className={"column__title"}>
            <h4>{title}</h4>
                <MyButton className={"column_title_edit_button"} onClick={() => props.setRenameModal({show: true, column: props.column})} >✎</MyButton>
                <MyButton className={"column_title_create_card_button"} onClick={() => props.setModal({show: true, column: props.column})}>+</MyButton>
                <MyButton className={"column_title_delete_column_button"} onClick={() => props.remove(props.column)} >×</MyButton>
            </div>
            <hr/>
            {(cardList !== undefined) ? cardList.map((card) => (
                <Card
                    draggable={props.draggable}
                    onDragOver={(e) => dragOverHandlerc(e)}
                    onDragLeave={(e) => dragLeaveHandlerc(e)}
                    onDragStart={(e) => dragStartHandlerc(e, props.column, card)}
                    onDragEnd={(e) => dragEndHandlerc(e)}
                    onDrop={(e) => dropHandlerc(e, props.column, card)}
                    title={card.title}
                />
            )) : <div></div>}
        </div>
    );
};

export default ColumnItem;