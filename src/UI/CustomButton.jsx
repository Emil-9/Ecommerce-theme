import classes from "./CustomButton.module.css";

const CustomButton = (props) => {
  const clickHandler = (event) => {
    console.log("button click");
    props.onClickBtn(event);
  };
  return (
    <button
      style={props.style}
      className={classes["custom-button"]}
      onClick={clickHandler}
    >
      {props.title ? props.title + ' ' : ""}
      {props.children}
    </button>
  );
};
export default CustomButton;
