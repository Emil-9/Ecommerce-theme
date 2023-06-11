import { Link } from "react-router-dom";
import classes from "./ButtonLink.module.css";
import NextIcon from "../images/next";
const ButtonLink = (props) => {
  return (
    <Link
      style={props.style}
      className={classes["button-link"] + " " + props.className}
      to={props.linkTo}
    >
      {props.title} &nbsp;
      <NextIcon
        style={props.style}
        fill={props.fill}
        height={props.height}
        width={props.width}
      />
    </Link>
  );
};
export default ButtonLink;
