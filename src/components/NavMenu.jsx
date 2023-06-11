import classes from "./NavMenu.module.css";
import User from "../images/user.svg";
import CartIcon from "../images/cart.jsx";
import { Link } from "react-router-dom";
import HeartIcon from "../images/heart.jsx";

const NavMenu = () => {
  return (
    <nav className={classes["nav-menu"]}>
      <ul className={classes["pages-menu"]}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
      <ul className={classes["cart-menu"]}>
        <li>
          <span>
            <HeartIcon height={21} fill={'black'} />
          </span>
        </li>
        <li>
          <span>
            <CartIcon fill="black" height={21} />
          </span>
        </li>
        <li>
          <span>
            <img src={User} alt="User" />
          </span>
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;
