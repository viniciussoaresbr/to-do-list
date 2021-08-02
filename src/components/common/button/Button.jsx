import "./Button.css";

const Button = ({ evClick, text }) => {
  return (
    <button
      className="button"
      onClick={() => {
        evClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
