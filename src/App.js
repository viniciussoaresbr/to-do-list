import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import NoteList from "./components/notelist/NoteList";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([]);

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
