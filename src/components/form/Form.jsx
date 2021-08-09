import { useState } from "react";
import Button from "../common/button/Button";
import Input from "../common/input/Input";
import Filter from "../filter/Filter";
import "./Form.css";

const Form = ({
    evSubmit = () => {},
    searchStr = "",
    fnChangeSearchStr = () => {},
    done = true,
    fnChangeDone = () => {},
    undone = true,
    fnChangeUndone = () => {},
}) => {
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
            <Filter
                searchStr={searchStr}
                fnChangeSearchStr={fnChangeSearchStr}
                done={done}
                fnChangeDone={fnChangeDone}
                undone={undone}
                fnChangeUndone={fnChangeUndone}
            />
        </form>
    );
};

export default Form;
