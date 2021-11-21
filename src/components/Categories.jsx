import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          data-testid="all-categories"
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}
        >
          All{' '}
        </li>
        {items.map((name, index) => (
          <li
            data-testid="item-category"
            key={`${name}_${index}`}
            className={activeCategory === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
