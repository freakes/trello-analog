import React, {useState} from "react";
import MyModal from "../components/UI/modal/MyModal.jsx";
import AddColumnForm from "../components/AddColumnForm.jsx";
import MyHeader from "../components/UI/header/MyHeader.jsx";
import ColumnItemsList from "../components/ColumnItemsList.jsx";


function MainPage() {
    const [columnsList, setColumnList] = useState([]);
    const [currentColumn, setCurrentColumn] = useState(null);
    const [currentCard, setCurrentCard] = useState(null);
    const [modal, setModal] = useState(false);

    const addNewColumn = (column) => {
        columnsList.push(column)
        setModal(false)
    }

    const removeColumn = (column) => {
        setColumnList(columnsList.filter((c) => c.id !== column.id))
    }

    return (
        <div className="App">
            {window.onbeforeunload = () => ""}
            <MyModal visible={modal} setVisible={setModal}>
                <AddColumnForm create={addNewColumn} columnsList={columnsList}/>
            </MyModal>
            <MyHeader setModal={setModal}/>
            <ColumnItemsList
                remove={removeColumn}
                columnsList={columnsList}
                setColumnList={setColumnList}
                setCurrentColumn={setCurrentColumn}
                currentColumn={currentColumn}
                setCurrentCard={setCurrentCard}
                currentCard={currentCard}
            />
        </div>
    );
}

export default MainPage;
