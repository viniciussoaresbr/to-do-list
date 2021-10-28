import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import NoteList from "./components/notelist/NoteList";
import NotesContextProvider from "./contexts/NotesContext";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="App">
      <Header
        fnToggleForm={() => {
          setShowForm(!showForm);
        }}
      />
      <NotesContextProvider>
        {showForm ? <Form /> : null}
        <NoteList />
      </NotesContextProvider>
    </div>
  );
}

export default App;
