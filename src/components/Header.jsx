import React from 'react';
import logo from '../images/logo.png';

const Header = (props) => {
    return (
        <header>
            <img src={logo} alt="Logo" style={{ height: '50px' }} />
            <h1>{props.title}</h1>
            <span className='total-items'>Items: {props.itemTotal}</span>
        </header>
    );
}

export default Header;
