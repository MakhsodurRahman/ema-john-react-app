import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, seller, ratings, price, quntity } = props.product;

    const handleAddToCard = props.handleAddToCard;
    
    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img}></img>
                <h5 className='product-name'>{name}</h5>
                <p className='product-price'>Price :{price}</p>
                <p>Manufacturar : {seller}</p>
                <p>Rating : {ratings}</p>
            </div>
            <button onClick={()=>handleAddToCard(props.product)} className='btn-cart'>Add to cart <FontAwesomeIcon icon={faShoppingCart} /> </button>
        </div>
    );
};

export default Product;