import classes from "./Products.module.css";
import ProductItem from "./ProductItem";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";

const Products = (props) => {
  const { categoryFilter, priceRange, onMaxProp, onMinProp, onSearch } = props;
  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState();
  const [error, setError] = useState(null);

  // fetch all products
  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      setError(null);
      const baseURL = "https://fakestoreapi.com/products/";
      let endPoint = "";
      try {
        if (categoryFilter === "" || categoryFilter === "all") {
          endPoint = "";
        } else {
          endPoint = "category/" + categoryFilter;
        }
        const response = await fetch(baseURL + endPoint, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Request failed!");
        }
        const result = await response.json();
        setData(result);
        setFilteredData(result);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    };
    sendRequest();
  }, [categoryFilter]);

  // change data on price range change and input search change
  // note: for future to use this effect in seperated filters the code should be changed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loading) {
        if (
          (priceRange && priceRange.length > 0) ||
          (onSearch && onSearch !== "")
        ) {
          const filterData = data.filter(
            (e) =>
              e.price >= priceRange[0] &&
              e.price <= priceRange[1] &&
              e.title
                .toLowerCase()
                .trim()
                .includes(onSearch.toString().toLowerCase().trim())
          );
          console.log("filtered", filterData);
          setFilteredData(filterData);
        }
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [data, loading, onSearch, priceRange]);

  // find the price range for slider max and min
  useEffect(() => {
    if (!loading && onMaxProp && onMinProp) {
      const pricesArray = data.map((el) => el.price);
      onMaxProp(Math.max(...pricesArray));
      onMinProp(Math.min(...pricesArray));
    }
  }, [data, onMaxProp, onMinProp, loading]);

  return (
    <>
      {loading && <Spinner />}
      {!loading && !error && data && (
        <ul className={classes["products-list"]}>
          {filteredData.map((el) => {
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
      )}
    </>
  );
};
export default Products;
