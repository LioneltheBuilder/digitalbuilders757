import React from 'react';
import Counter from './Counter.jsx';

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
