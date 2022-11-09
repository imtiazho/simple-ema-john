import React from 'react';
import './Cart.css';

const Cart = ({cart, children}) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    
    for(const product of cart){
        quantity = parseInt(quantity) + parseInt(product.quantity);
        total = parseInt(total) + parseInt(product.price) * parseInt(product.quantity);
        shipping = parseInt(shipping) + parseInt(product.shipping);
    }
    let tax = (total * 0.1).toFixed(0);
    let grandTotal = total + shipping + parseInt(tax);

    return (
        <div className='cart'>
            <h4>Order Summury</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            {children}
        </div>
    );
};

export default Cart;