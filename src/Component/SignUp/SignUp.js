import React from 'react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    console.log(user)
    const navigate = useNavigate()

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/')
    }
    const handleCreateUser = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Password Mismatched');
            return;
        }
        if (password < 6) {
            setError('Password must be 6 character');
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='from-container'>
            <h4 className='form-title'>Sign Up</h4>

            <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="" id="" required />
                </div>

                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type="password" name="" id="" required />
                </div>

                <input type="submit" className='form-submit-btn' value="Sign Up" />
            </form>
            <p>
                Already have an account? <Link className='form-link' to='/login'>Login</Link>
            </p>

            <div className="or-devider">
                <div className="left-line"></div>
                <p>or</p>
                <div className="right-line"></div>
            </div>

            <button className='google-btn'><FcGoogle></FcGoogle> Sign With Google</button>
        </div>
    );
};

export default SignUp;