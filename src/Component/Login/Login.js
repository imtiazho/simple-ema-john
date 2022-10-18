import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }

    const handleUserSignIn = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='from-container'>
            <h4 className='form-title'>Login</h4>

            <form onSubmit={handleUserSignIn}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="" id="" required />
                </div>

                <input type="submit" className='form-submit-btn' value="Login" />
            </form>
            <p>
                New to Ema-Jhon? <Link className='form-link' to='/signup'>Create an account</Link>
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

export default Login;