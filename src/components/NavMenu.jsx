import classes from "./NavMenu.module.css";
import User from "../images/user.svg";
import Heart from "../images/heart.svg";
import Cart from "../images/cart.svg";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <nav className={classes["nav-menu"]}>
      <ul className={classes["pages-menu"]}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
      <ul className={classes['cart-menu']}>
        <li>
          <span>
            <img src={Heart} alt="Fav" />
          </span>
        </li>
        <li>
          <span>
            <img src={Cart} alt="Cart" />
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
