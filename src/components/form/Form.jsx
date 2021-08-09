import { useState } from "react";
import Button from "../common/button/Button";
import Input from "../common/input/Input";
import "./Form.css";

const Form = ({ evSubmit = () => {} }) => {
    const [text, setText] = useState("");

    return (
        <form
            className="form"
            onSubmit={(event) => {
                event.preventDefault();
                evSubmit({ text });
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
        </form>
    );
};

export default Form;
