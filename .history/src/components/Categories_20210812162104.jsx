import React from "react";

function Categories({ items }) {
  const [activeItem,setActiveItem] = React.useState(null);
  // const  = state[0]
  // const  = state[1]   
  console.log(activeItem)
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
