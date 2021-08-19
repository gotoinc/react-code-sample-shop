import React from "react";

function Categories({ items }) {
  const [activeItem,setActiveItem] = React.useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index)
  }
  return (
    <div className="categories">
      <ul>
        {items.map((name, index) => (
          <li key={`${name}_${index}`}
          className={activeItem === index ? "active" : ""} 
          onClick={() => onSelectItem(index)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
