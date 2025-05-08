import React, { useReducer } from "react"; // Import useReducer
import Product from "./Product";



const initialData = [
    { id: 1, name: 'Apple', price: 1, inStock: true },
    { id: 2, name: 'Banana', price: 1, inStock: false },
    { id: 3, name: 'Cherry', price: 2, inStock: true },
  ];

  function reducer(state, action) {
    switch (action.type) {
      case 'TOGGLE_STOCK':
        return state.map((product) =>
          product.id === action.payload
            ? { ...product, inStock: !product.inStock }
            : product
        );
      default:
        return state;
    }
  }


  function ProductListWithReducer() {
    const [products, dispatch] = useReducer(reducer, initialData);
    const toggleStock = (id) => {
        dispatch({ type: 'TOGGLE_STOCK', payload: id });
    }

    return (
        <div>
          {products.map((product) => (
            <Product key={product.id} {...product} onToggle={toggleStock} />
          ))}
        </div>
      );

  }

  export default ProductListWithReducer;