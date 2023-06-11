import { useEffect, useState } from "react";
import classes from "./FiltersBar.module.css";
import Spinner from "./Spinner";

const FiltersBar = (props) => {
  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  let listItems = classes["filter-items"];
  if (props.vertical) {
    listItems = classes["filter-items"] + " " + classes["vertical"];
  }
  const categoryHandler = (event) => {
    document.querySelectorAll("button").forEach((el) => (el.className = "")); //clear active classes before activating the new one
    event.target.className = classes["active"];
    let category = event.target.id;
    category = category.trim().toLowerCase();
    props.onClickItem(category);
  };

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories",
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error("Request failed!");
        }
        const data = await response.json();
        setData(["All", ...data]);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  return (
    <nav className={classes["filters-nav"]}>
      <ul className={listItems} style={props.style}>
        {loading && <Spinner />}
        {data &&
          !error &&
          !loading &&
          data.map((el, key) => {
            return (
              <li className={classes["category-item"]} key={key}>
                <button
                  style={props.itemStyle}
                  className={key === 0 ? classes["active"] : ""}
                  id={el}
                  onClick={categoryHandler}
                >
                  {el}
                </button>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
export default FiltersBar;
