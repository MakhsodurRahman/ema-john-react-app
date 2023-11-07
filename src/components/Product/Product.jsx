import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, ratings, price, quntity } = props.product;
    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img}></img>
                <h5 className='product-name'>{name}</h5>
                <p className='product-price'>Price :{price}</p>
                <p>Manufacturar : {seller}</p>
                <p>Rating : {ratings}</p>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;