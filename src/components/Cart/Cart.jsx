import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    //const cart = props.cart;
    //const {cart } = props;

    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    console.log(total);
    return (
        <div className="cart">
            <h2>Order Summery</h2>
            <h3 style={{ color: 'black' }}>Selected Items : {cart.length}</h3>
            <p>Total Price:{total} </p>
            <p>Total Shipping: </p>
            <p>Tax: </p>
            <p>Grand Total: </p>
        </div>
    );
};

export default Cart;