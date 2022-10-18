import React from 'react';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const logOut = () =>{
        signOut(auth)
    }
    return (
        <nav className='header'>
            <img src={logo} alt="Logo of Ema john" />

            <div>
                <CustomLink className='nav-items' to="/shop">Shop</CustomLink>
                <CustomLink className='nav-items' to="/orders">Orders</CustomLink>
                <CustomLink className='nav-items' to="/inventory">Inventory</CustomLink>
                <CustomLink className='nav-items' to="/about">About</CustomLink>
                {user ?
                    <CustomLink className='nav-items' onClick={logOut} to="/login">Log Out</CustomLink>
                    :
                    <CustomLink className='nav-items' to="/login">Login</CustomLink>
                }
            </div>
        </nav>
    );
};

export default Header;