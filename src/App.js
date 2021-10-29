import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
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
        {showForm ? <Main /> : null}
        <NoteList />
      </NotesContextProvider>
    </div>
  );
}

export default App;
