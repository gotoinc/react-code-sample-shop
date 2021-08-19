import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ className, outline, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};
Button.defaultProps = {
  name: 'название пиццы',
  imageUrl:
    'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
  price: 0,
  types: [],
  sizes: [],
};

export default Button;
