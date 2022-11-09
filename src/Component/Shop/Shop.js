import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    // This custom hook to make dry
    // const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [pageSize, stePageSize] = useState(10);

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&pageSize=${pageSize}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, pageSize])

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10)
                setPageCount(pages)
            })
    }, [])
    // useEffect(() => {
    //     const storedCart = getStoredCart();
    //     const savedCart = [];

    //     for (const _id in storedCart) {
    //         const addedProduct = products.find(product => product._id === _id);
    //         if (addedProduct) {
    //             const quantity = storedCart[_id];
    //             addedProduct.quantity = quantity;
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCart(savedCart)
    // }, [products])

    const handleAddToCart = (selecteProduct) => {
        // console.log(selecteProduct);

        let newCart = [];

        const exists = cart.find(product => product._id === selecteProduct._id);
        if (!exists) {
            selecteProduct.quantity = 1;
            newCart = [...cart, selecteProduct];
        }
        else {
            const rest = cart.filter(product => product._id !== selecteProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        // const newCart = [...cart, selecteProduct];

        setCart(newCart);
        addToDb(selecteProduct._id)
    }

    return (
        <div className='shop-container'>

            <div className="products-container-boss">
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>

                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number => <button
                            className={page === (number) ? 'selected' : ''}
                            onClick={() => setPage( number)}
                        >{number}</button>)
                    }
                    <select onChange={
                        e => stePageSize(e.target.value)
                    }>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
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