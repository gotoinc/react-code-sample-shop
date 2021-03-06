import React from 'react';

const Categories = React.memo(function Categories({ items }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onCli
  };
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}
        >
          Все{' '}
        </li>
        {items.map((name, index) => (
          <li
            key={`${name}_${index}`}
            className={activeItem === index ? 'active' : ''}
            onClick={() => onSelectItem(index)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
