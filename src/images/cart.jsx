import React from "react";
const CartIcon = (props) => {
  const { width, height, fill } = props;
  const config = {
    width: width ? width : "25",
    height: height ? height : "26",
    viewBox: "0 0 25 26",
    fill: fill ? fill : "white",
    xmlns: "http://www.w3.org/2000/svg",
  };
  return (
    <svg {...config}>
      <path
        d="M18.6667 17.3333H7.184L7.628 16H21.0053L24.4347 4H4.85867L3.65867 0H0V2.66667H1.67467L5.268 14.6467L4.324 17.4787C3.60214 17.6686 2.94796 18.057 2.43567 18.5999C1.92339 19.1427 1.57351 19.8183 1.42572 20.55C1.27794 21.2816 1.33818 22.04 1.59959 22.7392C1.86101 23.4383 2.31314 24.0502 2.9047 24.5054C3.49625 24.9606 4.20355 25.2409 4.94633 25.3145C5.68911 25.3881 6.43765 25.252 7.10702 24.9217C7.77639 24.5914 8.33979 24.0801 8.73331 23.4459C9.12682 22.8116 9.33469 22.0798 9.33333 21.3333C9.32891 20.8781 9.24592 20.427 9.088 20H14.912C14.7541 20.427 14.6711 20.8781 14.6667 21.3333C14.6667 22.1245 14.9013 22.8978 15.3408 23.5556C15.7803 24.2134 16.405 24.7261 17.1359 25.0289C17.8668 25.3316 18.6711 25.4108 19.447 25.2565C20.223 25.1021 20.9357 24.7212 21.4951 24.1618C22.0545 23.6024 22.4355 22.8896 22.5898 22.1137C22.7441 21.3378 22.6649 20.5335 22.3622 19.8026C22.0594 19.0717 21.5467 18.447 20.8889 18.0075C20.2312 17.5679 19.4578 17.3333 18.6667 17.3333V17.3333ZM20.8987 6.66667L18.9947 13.3333H7.66133L5.66133 6.66667H20.8987ZM6.66667 21.3333C6.66667 21.597 6.58847 21.8548 6.44196 22.0741C6.29545 22.2934 6.08721 22.4643 5.84358 22.5652C5.59994 22.6661 5.33185 22.6925 5.07321 22.641C4.81457 22.5896 4.57699 22.4626 4.39052 22.2761C4.20405 22.0897 4.07707 21.8521 4.02562 21.5935C3.97417 21.3348 4.00058 21.0667 4.10149 20.8231C4.20241 20.5795 4.37331 20.3712 4.59257 20.2247C4.81184 20.0782 5.06963 20 5.33333 20C5.68696 20 6.02609 20.1405 6.27614 20.3905C6.52619 20.6406 6.66667 20.9797 6.66667 21.3333ZM18.6667 22.6667C18.403 22.6667 18.1452 22.5885 17.9259 22.442C17.7066 22.2955 17.5357 22.0872 17.4348 21.8436C17.3339 21.5999 17.3075 21.3319 17.359 21.0732C17.4104 20.8146 17.5374 20.577 17.7239 20.3905C17.9103 20.2041 18.1479 20.0771 18.4065 20.0256C18.6652 19.9742 18.9333 20.0006 19.1769 20.1015C19.4205 20.2024 19.6288 20.3733 19.7753 20.5926C19.9218 20.8118 20 21.0696 20 21.3333C20 21.687 19.8595 22.0261 19.6095 22.2761C19.3594 22.5262 19.0203 22.6667 18.6667 22.6667Z"
        fill={config.fill}
      />
    </svg>
  );
};
export default CartIcon;