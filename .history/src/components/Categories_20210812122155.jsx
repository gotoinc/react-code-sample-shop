import React from "react";

function Categories({ items, onClick }) {
  const state = React.useState(0);  
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((name, index) => (
          <li key={`${name}_${index}`} onClick={() => onClick(name)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
