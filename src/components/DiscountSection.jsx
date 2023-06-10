import Banner from "../UI/Banner";
import ButtonLink from "../UI/ButtonLink";
import classes from "./DiscountSection.module.css";
const DiscountSection = () => {
  return (
    <section>
      <Banner bgc="#F86338" color="#ffffff">
        <h5 className={classes["mt-0"]}>March Discount</h5>
        <h1>Up to 70% off</h1>
        <ButtonLink
          className={classes["m-auto"]}
          style={{ backgroundColor: "#ffffff", color: "#F86338" }}
          linkTo="/"
          title="Got it"
        />
      </Banner>
    </section>
  );
};
export default DiscountSection;
