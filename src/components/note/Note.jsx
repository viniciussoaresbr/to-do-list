import { useContext, useState } from "react";
import { NotesContext } from "../../contexts/NotesContext";
import Checkbox from "../common/checkbox/Checkbox";

import "./Note.css";

const Note = ({ note = { text: "Note text", done: false, id: 0 } }) => {
  const { fnToggleDone, removeNote } = useContext(NotesContext);
  const [showAdvice, setShowAdvice] = useState(false);

  return (
    <div
      className="note"
      onMouseOver={() => {
        setShowAdvice(true);
      }}
      onMouseOut={() => {
        setShowAdvice(false);
      }}
      onDoubleClick={() => {
        removeNote(note.id);
      }}
    >
      <div className="note__container">
        <span className="note__advice">
          {showAdvice && "* Clique duas vezes para excluir"}
        </span>
        <span className="note__text">{note.text}</span>
      </div>
      <Checkbox
        checked={note.done}
        evClick={({ checked }) => {
          fnToggleDone(note.id, checked);
        }}
      />
    </div>
  );
};

export default Note;
