import { useContext } from "react/cjs/react.development";
import { NotesContext } from "../../contexts/NotesContext";
import Note from "../note/Note";
const NoteList = () => {
  const { searchStr, notes, done, undone } = useContext(NotesContext);

  return (
    <div>
      {notes
        .filter(nota => {
          if (done && undone) {
            return nota;
          } else if (done) {
            return nota.done === true;
          } else if (undone) {
            return nota.done === false;
          } else {
            return null;
          }
        })
        .map((note, index) => {
          if (note.text.toUpperCase().includes(searchStr.toUpperCase())) {
            return <Note note={note} key={index} />;
          } else {
            return <></>;
          }
        })}
    </div>
  );
};

export default NoteList;
