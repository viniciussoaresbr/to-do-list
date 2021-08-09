import "./Checkbox.css";

const Checkbox = ({ evClick = () => {}, checked = false }) => {
    return (
        <div
            className="checkbox"
            onClick={() => {
                evClick({ checked: !checked });
            }}
        >
            <div className={checked ? "checkbox--checked" : ""}></div>
        </div>
    );
};

export default Checkbox;
