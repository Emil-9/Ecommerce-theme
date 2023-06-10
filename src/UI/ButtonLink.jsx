import { Link } from "react-router-dom";
import classes from "./ButtonLink.module.css";
import nextIcon from "../images/next.svg";
const ButtonLink = (props) => {
  return (
    <Link
      style={props.style}
      className={classes["button-link"] + " " + props.className}
      to={props.linkTo}
    >
      {props.title} &nbsp;
      <img style={props.style} src={nextIcon} alt="" />
    </Link>
  );
};
export default ButtonLink;
