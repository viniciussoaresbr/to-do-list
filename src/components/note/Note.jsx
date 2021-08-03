import Checkbox from "../common/checkbox/Checkbox";

import "./Note.css";

const Note = ({
    note = { text: "Note text", done: false },
    fnToggleDone = () => {},
    index,
}) => {
    return (
        <div className="note">
            <span className="note__text">{note.text}</span>
            <Checkbox
                evClick={({ checked }) => {
                    fnToggleDone(index, checked);
                }}
            />
        </div>
    );
};

export default Note;
