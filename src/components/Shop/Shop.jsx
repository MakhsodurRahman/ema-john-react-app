import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product product={product} key={product.id}></Product>)
                    }
                </div>
                <div className="card-container">
                    <h2>card container</h2>
                </div>
            </div>
        </div>
    );
};

export default Shop;