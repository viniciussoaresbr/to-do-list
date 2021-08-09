import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import NoteList from "./components/notelist/NoteList";

function App() {
    const [showForm, setShowForm] = useState(false);
    const [notes, setNotes] = useState([]);
    const [searchStr, setSearchStr] = useState("");
    const [done, setDone] = useState(true);
    const [undone, setUndone] = useState(true);

    return (
        <div className="App">
            <Header
                fnToggleForm={() => {
                    setShowForm(!showForm);
                }}
            />
            {showForm ? (
                <Form
                    evSubmit={({ text }) => {
                        setNotes([...notes, { text, done: false }]);
                    }}
                    searchStr={searchStr}
                    fnChangeSearchStr={({ value }) => {
                        setSearchStr(value);
                    }}
                    done={done}
                    fnChangeDone={({ checked }) => {
                        setDone(checked);
                    }}
                    undone={undone}
                    fnChangeUndone={({ checked }) => {
                        setUndone(checked);
                    }}
                />
            ) : null}
            <NoteList
                notes={notes}
                fnToggleDone={(index, checked) => {
                    const attNotes = notes;
                    attNotes[index].done = checked;
                    setNotes(attNotes);
                }}
            />
        </div>
    );
}

export default App;
