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



export default Button;
