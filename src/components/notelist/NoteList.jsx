import Note from "../note/Note";
const NoteList = ({ notes, fnToggleDone }) => {
  return (
    <div>
      {notes.map((note, index) => {
        return (
          <Note
            note={note}
            key={index}
            index={index}
            fnToggleDone={fnToggleDone}
          />
        );
      })}
    </div>
  );
};

export default NoteList;
