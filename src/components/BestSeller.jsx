import ProductItem from "./ProductItem";
import classes from "./BestSeller.module.css";
import DUMMY from "../data/BEST_SELLER_DUMMY.js";
const BestSeller = () => {
  return (
    <section className={classes["m-tb-100"]}>
      <h2>Best Seller</h2>
      <ul className={classes["products-list"]}>
        {DUMMY.map((el) => {
          return (
            <ProductItem
              key={el.id}
              title={el.title}
              src={el.image}
              id={el.id}
              cat={el.category}
              description={el.description}
              price={el.price}
            />
          );
        })}
      </ul>
    </section>
  );
};
export default BestSeller;
