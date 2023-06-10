import { useState } from "react";
import classes from "./ShopFull.module.css";
import FiltersBar from "./FiltersBar";
import Products from "./Products";
import RangeSlider from "../UI/RangeSlider.tsx";

const ShopFull = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRange, setPriceRange] = useState([]);

  const changeCategoryHandler = (data) => {
    setCategoryFilter(data);
  };

  const handlePriceChange = (data) => {
    setPriceRange(data);
    console.log(data);
  };

  return (
    <main className={classes.mainPage}>
      <div className={classes.paddingMain}>
        <FiltersBar onClickItem={changeCategoryHandler} />
        <aside>
          <RangeSlider onPriceChange={handlePriceChange} max={1000} min={0} />
        </aside>
        <Products categoryFilter={categoryFilter} priceRange={priceRange} />
      </div>
    </main>
  );
};

export default ShopFull;
