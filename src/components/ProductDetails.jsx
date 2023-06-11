import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { favActions } from "../store/fav-slice";
import CustomButton from "../UI/CustomButton";
import CartIcon from "../images/cart";
import CheckCircleIcon from "../images/checkCircle";
import StarIcon from "../images/star";
import classes from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  const ButtonStyle = {
    color: "#ffffff",
    backgroundColor: "#F86338",
  };

  const ButtonStyleTwo = {
    color: "#F86338",
    backgroundColor: "#ffffff",
    border: "1px solid #F86338",
    padding: "12px",
  };

  const addToCartHandler = (target) => {
    console.log('inside details -> add to cart -> ', props.itemData);
    dispatch(cartActions.addItem({ cartItem: props.itemData }));
  };

  const addToFavHandler = (target) => {
    console.log("dispatch here");
    dispatch(favActions.addToFav({ item: props.itemData }));
  };

  return (
    <main className={`${classes["product-details-container"]} max-1250`}>
      <div className={classes["product-row"]}>
        <div className={classes["product-col"] + " " + classes["images-col"]}>
          <div className={classes["menuImage"]}>
            <img src={props.itemData.image} alt={props.itemData.title} />
            <img src={props.itemData.image} alt={props.itemData.title} />
            <img src={props.itemData.image} alt={props.itemData.title} />
            <img src={props.itemData.image} alt={props.itemData.title} />
          </div>
          <div className={classes.mainImage}>
            <img src={props.itemData.image} alt={props.itemData.title} />
          </div>
        </div>
        <div className={classes["product-col"]}>
          <h2 className="mt-0">{props.itemData.title}</h2>
          <p className="font-MerriWeatherBold">
            <span className="font-MerriWeather color-grey">Avaliability</span> :{" "}
            {props.itemData.availability ? props.itemData.availability : "48"}{" "}
            in stocks
          </p>
          <h2 className="color-orange">
            ${props.itemData?.price}
            <span className={classes["oldPrice"]}>
              ${props.discount ? props.discount : "1000"}
            </span>
          </h2>
          <table>
            <tbody>
              <tr>
                <td className="font-MerriWeather color-dark">SKU</td>
                <td>: AA0031</td>
              </tr>
              <tr>
                <td className="font-MerriWeather color-dark">Category</td>
                <td>: {props.itemData?.category}</td>
              </tr>
              <tr>
                <td className="font-MerriWeather color-dark">Tags</td>
                <td>: Fashion, Classic, Blouses</td>
              </tr>
            </tbody>
          </table>
          <div className={classes["d-flex"]}>
            <CustomButton
              title="Add to Cart"
              style={ButtonStyle}
              onClickBtn={addToCartHandler}
            >
              <CartIcon height={15} />
            </CustomButton>
            <CustomButton style={ButtonStyleTwo} onClickBtn={addToFavHandler}>
              <StarIcon height={21} />
            </CustomButton>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes["product-row"]}>
        <div className={classes["details-col"] + " " + classes["max-60"]}>
          <h3>Description</h3>
          <p>{props?.itemData?.description}</p>
        </div>
        <div className={classes["details-col"]}>
          <h3>Fabric Details</h3>
          <ul className={classes["details-items"]}>
            <li>
              <CheckCircleIcon height={16} width={16} /> 100% Cotton
            </li>
            <li>
              <CheckCircleIcon height={16} width={16} /> Quick Dry
            </li>
            <li>
              <CheckCircleIcon height={16} width={16} /> Ties as Shoulder
            </li>
            <li>
              <CheckCircleIcon height={16} width={16} /> Accusantium doloremque{" "}
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};
export default ProductDetails;
