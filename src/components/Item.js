import React from 'react';
import Counter from './Counter';
import React from 'react';
import logo from './images/logo.png';
import { auth } from './firebase';


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


const Item = (props) => {
    return (
        <div className='item'>
            <button className='remove-item' onClick={() => props.removeItem(props.id)} />
            <span className='item-name'>{props.name}</span>
            <Counter streak={props.streak} />
        </div>
    );
}

export default Item;
