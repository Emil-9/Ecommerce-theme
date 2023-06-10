import classes from "./ProductItem.module.css";
import heart from "../images/heart.svg";
import { useDispatch } from "react-redux";
import { favActions } from "../store/fav-slice";
const ProductItem = (props) => {
  const dispatch = useDispatch();
  const addToFavHandler = (event) => {
    const item = {
      id: props.id,
      title: props.title,
      price: props.price,
      desription: props.description,
      category: props.cat,
      src: props.src,
    };
    dispatch(favActions.addItem({ item: item }));
  };
  return (
    <li className={classes["product-item"]}>
      <button
        id={props.id}
        onClick={addToFavHandler}
        className={classes["add-to-fav"]}
      >
        <img src={heart} alt="" />
      </button>
      <img
        className={classes["prod-img"]}
        id={props.id}
        src={props.src}
        alt={props.title}
      />
      <p className={classes.category}>{props.cat}</p>
      <h5 className={classes.title}>{props.title}</h5>
      <p className={classes.description}>{props.description}</p>
      <h5 className={classes.price}>${props.price}</h5>
    </li>
  );
};
export default ProductItem;
