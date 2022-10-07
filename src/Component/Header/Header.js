import React from 'react';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'


const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="Logo of Ema john" />

            <div>
                <CustomLink className='nav-items' to="/shop">Shop</CustomLink>
                <CustomLink className='nav-items' to="/orders">Orders</CustomLink>
                <CustomLink className='nav-items' to="/inventory">Inventory</CustomLink>
                <CustomLink className='nav-items' to="/about">About</CustomLink>
            </div>
        </nav>
    );
};

export default Header;