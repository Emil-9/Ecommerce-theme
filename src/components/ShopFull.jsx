import { useState } from "react";
import classes from "./ShopFull.module.css";
import FiltersBar from "./FiltersBar";
import Products from "./Products";
import RangeSlider from "../UI/RangeSlider.tsx";
import TextInput from "../UI/TextInput";
import DiscountSection from "./DiscountSection";

const ShopFull = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRange, setPriceRange] = useState([]);
  const [maxValue, setMaxValue] = useState();
  const [minValue, setMinValue] = useState();
  const [searchParam, setSearchParam] = useState("");

  const changeCategoryHandler = (data) => {
    setCategoryFilter(data);
  };

  const handlePriceChange = (data) => {
    setPriceRange(data);
  };

  const maxPropHandler = (number) => {
    setMaxValue(+number);
  };
  const minPropHandler = (number) => {
    setMinValue(+number);
  };

  const searchHandler = (data) => {
    console.log(data.target.value);
    setSearchParam(data.target.value);
  };

  const categoryFilterStyle = {
    fontSize: "12px",
    fontFamily: "DM-Sans",
    color: "#11142D",
  };
  const titleStyle = {
    fontSize: "24px",
    fontFamily: "MerriWeather",
    color: "#11142D",
    marginTop: 0,
  };

  return (
    <main className={classes.mainPage}>
      <div className={classes.paddingMain}>
        <div>
          <aside>
            <RangeSlider
              title="Price"
              titleStyle={titleStyle}
              onPriceChange={handlePriceChange}
              max={maxValue}
              min={minValue}
            />
            <FiltersBar
              itemStyle={categoryFilterStyle}
              vertical={true}
              onClickItem={changeCategoryHandler}
            />
            <DiscountSection
              buttonStyle={{ marginLeft: 0 }}
              style={{
                backgroundColor: "#F86338",
                color: "#ffffff",
                textAlign: "left",
              }}
            />
          </aside>
        </div>
        <div>
          <TextInput onChange={searchHandler} placeholder="Search products"  id='searchInput' />
          <Products
            categoryFilter={categoryFilter}
            priceRange={priceRange}
            onMaxProp={maxPropHandler}
            onMinProp={minPropHandler}
            onSearch={searchParam}
          />
        </div>
      </div>
    </main>
  );
};

export default ShopFull;
