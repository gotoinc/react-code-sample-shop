import React from "react";

function Categories({ items }) {
  const [] = React.useState(null);
  const  = state[0]
  const setActiveItem = state[1]   
  console.log(state)
  return (
    <div className="categories">
      <ul>
        <li>Все</li>
        {items.map((name, index) => (
          <li key={`${name}_${index}`}
          className={activeItem === index ? "active" : ""} 
          onClick={() => setActiveItem(index)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
