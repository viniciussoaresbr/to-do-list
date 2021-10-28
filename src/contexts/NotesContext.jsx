import { createContext, useState } from "react";

export const NotesContext = createContext({});

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [done, setDone] = useState(true);
  const [undone, setUndone] = useState(true);
  const [searchStr, setSearchStr] = useState("");

  const createNote = ({ text }) => {
    setNotes([...notes, { text, done: false, id: notes.length }]);
  };

  const fnToggleDone = (id, checked) => {
    setNotes(
      notes.map((value, i) => {
        if (i === id) {
          value.done = checked;
        }
        return value;
      })
    );
  };

  return (
    <NotesContext.Provider
      value={{
        createNote,
        done,
        setDone,
        undone,
        setUndone,
        fnToggleDone,
        searchStr,
        setSearchStr,
        notes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
