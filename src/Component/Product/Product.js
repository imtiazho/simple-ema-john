import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, img, seller, ratings, price} = props.product;
    const {handleAddToCart} = props;
    
    return (
        <div className='product'>
            <img src={img} alt="Image of product" />

            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p> <small>Manufacturer: {seller}</small> </p>
                <p> <small>Rating: {ratings} starts</small></p>
            </div>

            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;