import classes from "./HeroSection.module.css";
import ButtonLink from "../UI/ButtonLink";

const HeroSection = () => {
  return (
    <section className={classes["first-section"]}>
      <div className={classes.col}>
        <h2 className={classes["hero-title"]}>Sort out Your Spring Look</h2>
        <p>
          We will help to develop every smallest thing into a big one for your
          company.
        </p>
        <ButtonLink
          style={{ backgroundColor: "#F86338", color: "#ffffff" }}
          linkTo="/shop"
          title="Shop"
        />
      </div>
      <div className={classes['col'] + ' ' + classes.imgEmpty}></div>
      <div className={classes['col'] + ' ' + classes.imgEmpty}></div>
    </section>
  );
};
export default HeroSection;
