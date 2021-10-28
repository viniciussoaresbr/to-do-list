import { useContext } from "react/cjs/react.development";
import { NotesContext } from "../../contexts/NotesContext";
import Checkbox from "../common/checkbox/Checkbox";

import "./Note.css";

const Note = ({ note = { text: "Note text", done: false, id: 0 } }) => {
  const { fnToggleDone } = useContext(NotesContext);

  return (
    <div className="note">
      <span className="note__text">{note.text}</span>
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
