import React from "react";

const Card = (props) => {
  return <div {...props} className={`border dark:border-none p-4 shadow-sm bg-white dark:bg-dark_secondary rounded-xl ${props.className}`} />;
};

Card.defaultProps = {
  className: "",
};

export default Card;
