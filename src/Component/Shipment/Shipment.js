import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
  
    const navigate = useNavigate()

    // const handleEmailBlur = (event) => {
    //     setEmail(event.target.value)
    // }

    const handleNameBlur = (event) => {
        setName(event.target.value)
    }

    const handleAddressBlur = (event) => {
        setAddress(event.target.value)
    }

    const handlePhoneBlur = (event) => {
        setAddress(event.target.value)
    }

    const handleCreateUser = (event) => {
        event.preventDefault()
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }


    return (
        <div className='from-container'>
            <h4 className='form-title'>Shipping Information</h4>

            <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="name">Your Name</label>
                    <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="" required />
                </div>

                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                </div>

                <div className="input-group">
                    <label htmlFor="phone">Phone</label>
                    <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
                </div>

                <input type="submit" className='form-submit-btn' value="Submit" />
            </form>
        </div>
    );
};

export default Shipment;