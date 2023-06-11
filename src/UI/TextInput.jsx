import classes from "./TextInput.module.css";
const TextInput = (props) => {
  const changeHandler = (data) => {
    props.onChange(data);
  };
  return (
    <input
      id={props.id}
      className={classes["custom-input"]}
      type="text"
      onChange={changeHandler}
      placeholder={props.placeholder ? props.placeholder : "Type Here"}
    />
  );
};

export default TextInput;
