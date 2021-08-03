import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Note from "./components/note/Note";

function App() {
    const [showForm, setShowForm] = useState(false);

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
                        console.log(text);
                    }}
                />
            ) : null}
        </div>
    );
}

export default App;
