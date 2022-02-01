import React, { FC } from 'react';
import './Categories.scss';

interface ICategories {
  activeCategory: number | null;
  items: string[];
  onClickCategory: (index: null | number) => void;
}

const Categories: FC<ICategories> = React.memo(
  ({ activeCategory, items, onClickCategory }) => {
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
          {items.map((name: string, index: number) => (
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
  },
);

export default Categories;
