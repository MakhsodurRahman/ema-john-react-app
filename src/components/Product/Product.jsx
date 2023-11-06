import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name,saller,rating,price,quntity} = props.product;
    return (
        <div>
            <h3>product comming : {props.product.id}</h3>
            <img src={img}></img>
        </div>
    );
};

export default Product;