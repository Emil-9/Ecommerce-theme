import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = (props) => {
  return (
    <div>
      <Slider {...props.config}>
        <div>
          <p>
            Tanahair is the friendliest and most efficient company I have ever
            used. The whole thing takes time to introduce the product and as a
            result puts forward only the best opportunities that really suit
            you. they help from start to finish to create a great product
            identity for your company
          </p>
          <h3>Shalima Hayden</h3>
          <p>Product Designer</p>
        </div>
        <div>
          <p>
            Tanahair is the friendliest and most efficient company I have ever
            used. The whole thing takes time to introduce the product and as a
            result puts forward only the best opportunities that really suit
            you. they help from start to finish to create a great product
            identity for your company
          </p>
          <h3>Shalima Hayden</h3>
          <p>Product Designer</p>
        </div>
        <div>
          <p>
            Tanahair is the friendliest and most efficient company I have ever
            used. The whole thing takes time to introduce the product and as a
            result puts forward only the best opportunities that really suit
            you. they help from start to finish to create a great product
            identity for your company
          </p>
          <h3>Shalima Hayden</h3>
          <p>Product Designer</p>{" "}
        </div>
        <div>
          <p>
            Tanahair is the friendliest and most efficient company I have ever
            used. The whole thing takes time to introduce the product and as a
            result puts forward only the best opportunities that really suit
            you. they help from start to finish to create a great product
            identity for your company
          </p>
          <h3>Shalima Hayden</h3>
          <p>Product Designer</p>{" "}
        </div>
      </Slider>
    </div>
  );
};
export default SimpleSlider;
