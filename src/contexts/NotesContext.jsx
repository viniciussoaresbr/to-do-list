import { createContext, useState } from "react";
import { v4 as idGenerator } from "uuid";

export const NotesContext = createContext({});

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [done, setDone] = useState(true);
  const [undone, setUndone] = useState(true);
  const [searchStr, setSearchStr] = useState("");

  const createNote = ({ text }) => {
    setNotes([...notes, { text, done: false, id: idGenerator() }]);
  };

  const fnToggleDone = (id, checked) => {
    setNotes(
      notes.map(note => {
        if (note.id === id) {
          note.done = checked;
        }
        return note;
      })
    );
  };

  const removeNote = id => {
    setNotes(
      notes.filter(note => {
        return note.id !== id;
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
        removeNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
