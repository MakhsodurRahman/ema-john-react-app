import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    const handleAddToCard = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product product={product} key={product.id} handleAddToCard={handleAddToCard}></Product>)
                    }
                </div>
                <div className="card-container">
                    <h2>card container</h2>
                    <h3 style={{color:'black'}}>Selected Items : {cart.length}</h3>
                </div>
            </div>
        </div>
    );
};

export default Shop;