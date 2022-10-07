import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProducts from '../Hooks/useProducts';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // const [products, setProducts] = useState([]);

    // This custom hook to make dry
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useState([])

    // useEffect( ()=>{
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // } , []);

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (selecteProduct) =>{
        // console.log(selecteProduct);

        let newCart = [];

        const exists = cart.find(product => product.id === selecteProduct.id);
        if(!exists){
            selecteProduct.quantity = 1;
            newCart = [...cart, selecteProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selecteProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        // const newCart = [...cart, selecteProduct];

        setCart(newCart);
        addToDb(selecteProduct.id)
    }
            
    return (
        <div className='shop-container'>

            <div className="products-container">
                {
                    products.map(product => <Product
                         key={product.id} 
                         product={product}
                         handleAddToCart={handleAddToCart}
                         ></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;