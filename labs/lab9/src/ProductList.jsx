import { use } from "react";
import React, { useState } from "react"; // Add useState here
import Product from "./Product";

const initialData = [
    { id: 1, name: 'Apple', price: 1, inStock: true },
    { id: 2, name: 'Banana', price: 1, inStock: false },
    { id: 3, name: 'Cherry', price: 2, inStock: true },
  ];

function ProductList() {

    const [products, setProducts] = useState(initialData);

    const ontoggle = (id) => {
        setProducts((prevProducts) => {
            return prevProducts.map((product) => {
                if (product.id === id) {
                    return { ...product, inStock: !product.inStock };
                }
                return product;
            });
        });
    }


    return(
        <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center', flexDirection: 'column' }}>
        {products.map((product, index) => ( // Add index here
                <div key={product.id} style={{ width: '100%' }}>
                
                    <Product 
                      
                        {...product}
                        onToggle={ontoggle}
                    />
                  

                </div>

              
        ))}
    </div>
    )

}

export default ProductList;