import SimpleSlider from "../UI/Slider";
import classes from "./Reviewscard.module.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const ReviewsCard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow className={classes["slick-next"]} />,
    prevArrow: <PrevArrow className={classes["slick-prev"]} />,
  };
  return (
    <section className={classes["reviews-section"]}>
      <h2>What Our Customer Says</h2>
      <div className={classes["slider-container"]}>
        <SimpleSlider config={{ ...settings }} />
      </div>
    </section>
  );
};
export default ReviewsCard;
