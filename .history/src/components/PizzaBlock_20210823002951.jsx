import React from 'react';
import classNames from 'classnames';
import ContentLoader from 'react-content-loader';
import PropTypes from 'prop-types';

function PizzaBlock({ imageUrl, name, price, types, sizes }) {
  const typeNames = ['тонкое', 'традиционное'];
  const avaliableSizes = [26, 30, 40];
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);
  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typeNames.map((type, index) => (
            <li
              key={type}
              className={classNames({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
              onClick={() => onSelectType(index)}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {avaliableSizes.map((size, index) => (
            <li
              key={size}
              className={classNames({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}
              onClick={() => onSelectSize(index)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
      <div>
        {/* <ContentLoader
          speed={2}
          width={280}
          height={460}
          viewBox="0 0 280 460"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="127" cy="143" r="124" />
          <rect x="12" y="283" rx="0" ry="6" width="245" height="27" />
          <rect x="16" y="330" rx="0" ry="6" width="242" height="60" />
          <rect x="160" y="408" rx="0" ry="6" width="91" height="26" />
          <rect x="20" y="407" rx="0" ry="6" width="91" height="26" />
        </ContentLoader> */}
      </div>
    </div>
  );
}
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

export default PizzaBlock;
