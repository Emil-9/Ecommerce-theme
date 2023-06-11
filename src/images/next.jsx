const NextIcon = (props) => {
  const { width, height, fill } = props;
  const config = {
    width: width ? width : "8",
    height: height ? height : "21",
    viewBox: "0 0 11 18",
    fill: fill ? fill : "white",
    xmlns: "http://www.w3.org/2000/svg",
  };
  return (
    <svg {...config}>
      <path
        d="M0.292969 1.70697L7.58597 8.99997L0.292969 16.293L1.70697 17.707L10.414 8.99997L1.70697 0.292969L0.292969 1.70697Z"
        fill={config.fill}
      />
    </svg>
  );
};
export default NextIcon;
