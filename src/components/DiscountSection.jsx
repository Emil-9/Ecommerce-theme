import Banner from "../UI/Banner";
import ButtonLink from "../UI/ButtonLink";
import classes from "./DiscountSection.module.css";
const DiscountSection = (props) => {
  const buttonStyle = {
    ...props.buttonStyle,
    backgroundColor: "#ffffff",
    color: "#F86338",
  };
  return (
    <section>
      <Banner style={props.style}>
        <h5 className={classes["mt-0"]}>March Discount</h5>
        <h1>Up to 70% off</h1>
        <ButtonLink
          className={classes["m-auto"]}
          style={buttonStyle}
          linkTo="/"
          title="Got it"
          fill={"#F86338"}
          height={21}
        />
      </Banner>
    </section>
  );
};
export default DiscountSection;
