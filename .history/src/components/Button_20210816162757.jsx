import React from "react";
import classNames from "classnames";

const Button = ({ className, outline, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--outline": outline,
      })}>
      {children}
    </button>
  );
};

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
};
PizzaBlock.defaultProps = {
  name: 'название пиццы',
  imageUrl:
    'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
  price: 0,
  types: [],
  sizes: [],
};




export default Button;
