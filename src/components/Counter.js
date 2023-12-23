import React, { useState } from 'react';


const Counter = (props) => {
    const [streak, setStreak] = useState(props.streak);

    const incrementStreak = () => {
        setStreak(prevStreak => prevStreak + 1);
    }

    const decrementStreak = () => {
        if (streak > 0) {
            setStreak(prevStreak => prevStreak - 1);
        }
    }

    return (
        <div className='quantity'>
            <span className='qty-label'> Streak</span>
            <button className='increment' onClick={incrementStreak}>+</button>
            <button className='decrement' onClick={decrementStreak}>-</button>
            <span className='quantity-amount'>{streak}</span>
        </div>
    );
}

export default Counter;
