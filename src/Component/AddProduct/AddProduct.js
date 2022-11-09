import React, { useState } from 'react';
import './AddProduct.css'

const AddProduct = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const [rating, setRating] = useState('')
    const [category, setCategory] = useState('')
    const [stock, setStock] = useState('')
    const [ratingCount, setRatingCount] = useState('')
    const [img, setImg] = useState('')
    const [shippingCharge, setShipping] = useState('')

    const handleNameBlur = (event) => {
        setName(event.target.value)
    }

    const handlePriceBlur = (event) => {
        setPrice(event.target.value)
    }

    const handleManufacturerBlur = (event) => {
        setManufacturer(event.target.value)
    }

    const handleRating = (event) => {
        setRating(event.target.value)
    }

    const handleCategory = (event) => {
        setCategory(event.target.value)
    }

    const handleStock = (event) => {
        setStock(event.target.value)
    }

    const handleRatingCount = (event) => {
        setRatingCount(event.target.value)
    }

    const handleImg = (event) => {
        setImg(event.target.value)
    }

    const handleShipping = (event) => {
        setShipping(event.target.value)
    }

    const handleAddProduct = (event) => {
        event.preventDefault();

        const product = { name: name, price: price, seller: manufacturer, ratings: rating, category: category, stock: stock, ratingsCount: ratingCount, img: img, shipping: shippingCharge, quantity: 0, }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
    }
    return (
        <div className='add-product'>
            <h1>Add Some Product</h1>
            <form onSubmit={handleAddProduct}>
                <div className="input-group">
                    <label htmlFor="name">Product Name</label>
                    <input placeholder='ex: "ULTRABOOST 22 SHOES"' onBlur={handleNameBlur} type="text" name="" id="" required />
                </div>

                <div className="input-group">
                    <label htmlFor="price">Product Price</label>
                    <input placeholder='ex: "45"' onBlur={handlePriceBlur} type="text" name="" id="" required />
                </div>

                <div className="input-group">
                    <label htmlFor="manufacturer">Product Manufacturer</label>
                    <input placeholder='ex: "Adidas"' onBlur={handleManufacturerBlur} type="text" name="" id="" required />
                </div>

                <div className="input-group">
                    <label htmlFor="rating">Product Rating</label>
                    <input placeholder='ex: "5"' onBlur={handleRating} type="text" name="" id="" required />
                </div>

                <div className="input-group">
                    <label htmlFor="category">Product Category</label>
                    <input placeholder='ex: "Mens Sneaker"' onBlur={handleCategory} type="text" name="" id="" required />
                </div>

                <div className="input-group">
                    <label htmlFor="stock">Stock You have?</label>
                    <input placeholder='ex: "100"' onBlur={handleStock} type="text" name="" id="" required />
                </div>

                <div className="input-group">
                    <label htmlFor="ratingCount">Rating Count</label>
                    <input placeholder='ex: "589"' onBlur={handleRatingCount} type="text" name="" id="" required />
                </div>

                <div className="input-group">
                    <label htmlFor="img">Product Image</label>
                    <input placeholder='ex: "url now!"' onBlur={handleImg} type="text" name="" id="" required />
                </div>

                <div className="input-group">
                    <label htmlFor="shipping">Product Shipping Charge</label>
                    <input placeholder='ex: "56"' onBlur={handleShipping} type="text" name="" id="" required />
                </div>

                <input type="submit" className='form-submit-btn' value="Sign Up" />
            </form>
        </div>
    );
};

export default AddProduct;