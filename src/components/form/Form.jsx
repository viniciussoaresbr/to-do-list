import { useState } from "react";
import Button from "../common/button/Button";
import "./Form.css";

const Form = ({ evSubmit = () => {} }) => {
    const [text, setText] = useState("");

    return (
        <form
            className="form"
            onSubmit={(event) => {
                event.preventDefault();
                evSubmit({ text });
            }}
        >
            <div className="input">
                <label className="input__label">
                    O que eu tenho pra fazer?
                </label>
                <input
                    className="input__field"
                    type="text"
                    value={text}
                    onChange={(event) => {
                        setText(event.target.value);
                    }}
                />
            </div>
            <Button text="Criar lembrete" type="submit" />
        </form>
    );
};

export default Form;
