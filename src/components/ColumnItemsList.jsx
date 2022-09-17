import ColumnItem from "./ColumnItem.jsx";
import {useState} from "react";
import MyModal from "./UI/modal/MyModal.jsx";
import AddForm from "./AddForm.jsx";
import RenameColumnForm from "./RenameColumnForm";

const ColumnItemsList = ({...props}) => {

    const [modal, setModal] = useState({show: false, column: {}});
    const [renameModal, setRenameModal] = useState({show: false, column: {}});
    const [dragStartTargetClassName, setDragStartTargetClassName] = useState("");

    if (!props.columnsList.length) {
        return (
            <h1 className={"not_found"}>Создайте новую колонку</h1>
        )

    }
    const addNewCard = (column, newCard) => {
        column.items.push(newCard);
        setModal({show: false, column: {}})
    }
    const renameColumn = (column, newTitle) => {
        props.columnsList[column.order - 1].title = newTitle;
        props.setColumnList(props.columnsList)
        setRenameModal({show: false, column: {}})
    }


    function dragStartHandler(e, column) {
        setDragStartTargetClassName(e.target.className)
        props.setCurrentColumn(column)
    }

    function dragEndHandler(e) {
        if (dragStartTargetClassName !== "card") {
            e.target.style.boxShadow = 'none'
        }
    }

    function dragOverHandler(e) {
        e.preventDefault()
        if (dragStartTargetClassName !== "card") {
            e.target.style.boxShadow = '0 4px 3px gray'
        }
    }

    function dropHandler(e, column) {
        if (e.target.className === "column__item" && dragStartTargetClassName === "column__item") {
            e.preventDefault()
            props.setColumnList(props.columnsList.map(c => {
                if (c.id === column.id) {
                    return {...c, order: props.currentColumn.order}
                }
                if (c.id === props.currentColumn.id) {
                    return {...c, order: column.order}
                }
                return c
            }))
        } else if (e.target.className === "column__item" && dragStartTargetClassName === "card") {
            column.items.push(props.currentCard)
            const currentIndex = props.currentColumn.items.indexOf(props.currentCard);
            props.currentColumn.items.splice(currentIndex, 1)
            props.setColumnList(props.columnsList.map(c => {
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

    const sortColumns = (a, b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }


    return (
        <div className={"columns"}>
            <MyModal visible={modal.show} setVisible={setModal}>
                <AddForm create={addNewCard} column={modal.column}/>
            </MyModal>
            <MyModal visible={renameModal.show} setVisible={setRenameModal}>
                <RenameColumnForm rename={renameColumn} column={renameModal.column}/>
            </MyModal>
            {props.columnsList.sort(sortColumns).map((column) => (
                <ColumnItem
                    dragStartTargetClassName={dragStartTargetClassName}
                    onDragStart={(e) => dragStartHandler(e, column)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropHandler(e, column)}
                    draggable={true}
                    remove={props.remove}
                    renameColumn={renameColumn}
                    addCard={addNewCard}
                    renameModal={renameModal}
                    setRenameModal={setRenameModal}
                    modal={modal}
                    setModal={setModal}
                    columnsList={props.columnsList}
                    title={column.title}
                    column={column}
                    setColumnList={props.setColumnList}
                    currentCard={props.currentCard}
                    setCurrentCard={props.setCurrentCard}
                    currentColumn={props.currentColumn}
                    setCurrentColumn={props.setCurrentColumn}
                    cardList={column.items}
                />
            ))}
        </div>
    );
};

export default ColumnItemsList;