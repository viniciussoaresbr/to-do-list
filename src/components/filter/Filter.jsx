import "./Filter.css";
import Checkbox from "../common/checkbox/Checkbox";
import Input from "../common/input/Input";
import { useContext } from "react/cjs/react.development";
import { NotesContext } from "../../contexts/NotesContext";

const Filter = () => {
  const { done, setDone, undone, setUndone, searchStr, setSearchStr } =
    useContext(NotesContext);

  return (
    <>
      <Input
        label="Pesquisar:"
        value={searchStr}
        evChange={({ value }) => {
          setSearchStr(value);
        }}
      />
      <label className="form__label">Finalizadas</label>
      <Checkbox
        checked={done}
        evClick={({ checked }) => {
          setDone(checked);
        }}
      />
      <label className="form__label">Não Finalizadas</label>
      <Checkbox
        checked={undone}
        evClick={({ checked }) => {
          setUndone(checked);
        }}
      />
    </>
  );
};

export default Filter;
