import { useEffect, useState } from "react";

const Input = ({ label = "", value = "", evChange = () => {} }) => {
    return (
        <div className="input">
            <label htmlFor="" className="input__label">
                {label}
            </label>
            <input
                value={value}
                type="text"
                className="input__field"
                onChange={(event) => {
                    evChange({ value: event.target.value });
                }}
            />
        </div>
    );
};

export default Input;
