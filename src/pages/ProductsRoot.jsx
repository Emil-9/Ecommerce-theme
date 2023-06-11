import { Outlet } from "react-router-dom";
import ReviewsCard from "../components/ReviewsCard";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavMenu from "../components/NavMenu";
const ProductsRoot = () => {
  return (
    <>
      <NavMenu />
      <HeroSection />
      <Outlet />
      <ReviewsCard />
      <Footer />
    </>
  );
};
export default ProductsRoot;
