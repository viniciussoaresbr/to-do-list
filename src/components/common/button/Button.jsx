import "./Button.css";

const Button = ({ evClick = () => {}, text, type = "button" }) => {
    return (
        <button
            className="button"
            onClick={(event) => {
                evClick(event);
            }}
            type={type}
        >
            {text}
        </button>
    );
};

export default Button;
