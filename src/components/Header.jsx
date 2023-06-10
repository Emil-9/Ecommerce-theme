import classes from "./Header.module.css";
import Logo from "../images/logo.png";
const Header = () => {
  return (
    <header>
      <ul className={classes["header-container"]}>
        <li>+022 319 821 967</li>
        <li>
          <img className={classes.logo} src={Logo} alt="Logo" />
        </li>
        <li>
          <ul className={classes["social-items"]}>
            <li>
              <a href="/" target="_blank">fb</a>
            </li>
            <li>
              <a href="/" target="_blank">tw</a>
            </li>
            <li>
              <a href="/" target="_blank">in</a>
            </li>
            <li>
              <a href="/" target="_blank">li</a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};
export default Header;
