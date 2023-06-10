import classes from "./Banner.module.css";
const Banner = (props) => {
  return (
    <div
      style={{ color: props.color, backgroundColor: props.bgc }}
      className={classes["banner-container"]}
    >
        <div className={classes.centered}>
        {props.children}
        </div>
    </div>
  );
};

export default Banner;
