import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart()

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id)
        setCart(rest)
        removeFromDb(product._id)
    }

    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product._id}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/shipment'>
                        <button>Proceed Shipment</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;