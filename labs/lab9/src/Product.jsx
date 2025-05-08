import React from "react";

function  Product({id, name, price, inStock, onToggle}){
    const color = {color: inStock ? 'green' : 'red'};


    return(
        <>
        <div style={color}>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p>In stock: {inStock ? 'In Stock' : 'Out of stock'}</p>
            <button onClick={() => onToggle(id)}> Toggle Stock</button>

        </div>

        <hr />
        </>

    ) 
}

export default Product;
