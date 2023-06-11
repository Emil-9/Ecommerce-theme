import classes from "./Banner.module.css";
const Banner = (props) => {
  return (
    <div
      style={props.style}
      className={classes["banner-container"]}
    >
        <div className={classes.centered}>
        {props.children}
        </div>
    </div>
  );
};

export default Banner;
