import classes from "./Products.module.css";
import ProductItem from "./ProductItem";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";

const Products = (props) => {
  const { categoryFilter, priceRange } = props;
  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState();
  const [error, setError] = useState(null);

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
        const data = await response.json();
        setData(data);
        setFilteredData(data);

      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    };
    sendRequest();
  }, [categoryFilter]);

  useEffect(() => {
    if (!loading && priceRange) {
      const timer = setTimeout(() => {
        console.log("update price range", priceRange);
        if (priceRange.length > 0) {
          setFilteredData([]);
          data.forEach((element) => {
            if (
              element.price >= priceRange[0] &&
              element.price <= priceRange[1]
            ) {
              console.log(element.price);
              setFilteredData((prev) => [...prev, element]);
            }
          });
        }
      });
      return () => clearTimeout(timer);
    }
  }, [data, loading, priceRange]);

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
