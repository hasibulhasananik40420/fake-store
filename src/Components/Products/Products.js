import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = (props) => {
    const {setCartCount}=props
     const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))

    },[])
    console.log(products);

    return (
        <div>
            <h2>All Products</h2>

         <div className="row1 container">
         {
               products.map((pd)=> <Product setCartCount={setCartCount} key={pd.id} product={pd}></Product>)
         }
         </div>
        </div>
    );
};

export default Products;