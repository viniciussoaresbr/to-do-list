import { useState } from "react";
import "./Checkbox.css";

const Checkbox = ({ evClick = () => {} }) => {
    const [checked, setChecked] = useState(false);

    return (
        <div
            className="checkbox"
            onClick={() => {
                evClick({ checked: !checked });
                setChecked(!checked);
            }}
        >
            <div className={checked ? "checkbox--checked" : ""}></div>
        </div>
    );
};

export default Checkbox;
