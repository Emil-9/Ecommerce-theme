import classes from "./NavMenu.module.css";
import User from "../images/user.svg";
import CartIcon from "../images/cart.jsx";
import { Link } from "react-router-dom";
import HeartIcon from "../images/heart.jsx";
import { useSelector } from "react-redux";

const NavMenu = () => {
  //Get redux store data

  const cartData = useSelector((state) => state.cartReducer.cartItems);
  const favItems = useSelector((state) => state.favouriteReducer.items);

  const cartLength = cartData.length; // check cart array length
  const favAmount = favItems.length; // check fav length

  let totalAmount = 0;
  if (cartLength > 0) {
    const initialValue = 0;
    const cartTotals = cartData.map((e) => e.total);
    totalAmount = cartTotals.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  }

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
          <div className={classes["cartIcon-container"]}>
            <div className={classes["cart-badge"]}>{favAmount}</div>
            <HeartIcon height={21} fill={"black"} />
          </div>
        </li>
        <li>
          <div className={classes["cartIcon-container"]}>
            <div className={classes["cart-badge"]}>{totalAmount}</div>
            <CartIcon fill="black" height={21} />
          </div>
        </li>
        <li>
          <div>
            <img src={User} alt="User" />
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default NavMenu;
