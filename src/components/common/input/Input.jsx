import "./Input.css";
const Input = ({
  label = "",
  value = "",
  evChange = () => {},
  validate = false,
}) => {
  return (
    <div className="input">
      <label htmlFor="" className="input__label">
        {label}
      </label>
      <input
        maxLength="50"
        required={validate}
        value={value}
        type="text"
        className="input__field"
        onChange={event => {
          evChange({ value: event.target.value });
        }}
      />
    </div>
  );
};

export default Input;
