import React from "react";

// export default class Categories extends Component {
//   state = {
//     activeItem: 2,
//     test: 123,
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });

//   };

//   render() {
//     const { items } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li className="active">Все</li>
//           {items.map((name, index) => (
//             <li
//               onClick={() => this.onSelectItem(index)}
//               key={`${name}_${index}`}
//               className={this.state.activeItem === index ? "active" : ""}
//             >
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

function Categories({ items, onClick }) {
  const state = React.useState(null);
  const activeItem = state[0]
  const setActiveItem = state[1]

  console.log(activeItem,setActiveItem);    
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
