import { useState } from "react";
import classes from "./Home.module.css";
import FiltersBar from "./FiltersBar";
import Products from "./Products";
import HeroSection from "./HeroSection";
import BestSeller from "./BestSeller";
import DiscountSection from "./DiscountSection";
import ReviewsCard from "./ReviewsCard";

const Home = () => {
  const [categoryFilter, setCategoryFilter] = useState("");

  const changeCategoryHandler = (data) => {
    setCategoryFilter(data);
  };

  return (
    <main className={classes.mainPage}>
      <HeroSection />
      <div className={classes.paddingMain}>
        <FiltersBar onClickItem={changeCategoryHandler} />
        <Products categoryFilter={categoryFilter} />
        <DiscountSection
          style={{ backgroundColor: "#F86338", color: "#ffffff" }}
        />
        <BestSeller />
        <ReviewsCard />
      </div>
    </main>
  );
};

export default Home;
