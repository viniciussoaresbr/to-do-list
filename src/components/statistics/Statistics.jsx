import { useContext } from "react/cjs/react.development";
import { NotesContext } from "../../contexts/NotesContext";
import "./Statistics.css";

const Statistics = () => {
  const { notes } = useContext(NotesContext);

  const finishedNotes = notes.filter(note => note.done === true);
  const unfinishedNotes = notes.filter(note => note.done === false);

  return (
    <section className="statistics">
      <h1 className="statistics__title">Estatísticas:</h1>
      <div className="statistics__container">
        <div
          className="pipe"
          id="pipe--blue"
          style={{ height: `${notes.length}rem` }}
        ></div>
        <h1 className="statistics__info">{`Total: ${notes.length}`}</h1>
      </div>
      <div className="statistics__container">
        <div
          className="pipe"
          style={{ height: `${finishedNotes.length}rem` }}
        ></div>
        <h1 className="statistics__info">{`Finalizadas: ${finishedNotes.length}`}</h1>
      </div>
      <div className="statistics__container">
        <div
          className="pipe"
          id="pipe--red"
          style={{ height: `${unfinishedNotes.length}rem` }}
        ></div>
        <h1 className="statistics__info">{`Não Finalizadas: ${unfinishedNotes.length}`}</h1>
      </div>
    </section>
  );
};

export default Statistics;
