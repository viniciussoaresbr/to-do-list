import { useContext, useState } from "react";
import { NotesContext } from "../../contexts/NotesContext";
import Button from "../common/button/Button";
import Input from "../common/input/Input";
import Filter from "../filter/Filter";
import "./Form.css";

const Form = () => {
  const [text, setText] = useState("");
  const { createNote } = useContext(NotesContext);

  return (
    <form
      className="form"
      onSubmit={event => {
        event.preventDefault();
        createNote({ text });
        setText("");
      }}
    >
      <Input
        label="O que eu tenho pra fazer?"
        value={text}
        evChange={({ value }) => {
          setText(value);
        }}
      />
      <Button text="Criar lembrete" type="submit" />
      <Filter />
    </form>
  );
};

export default Form;
