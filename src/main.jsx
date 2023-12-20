import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import logo from './images/logo.png';

const Header = (props) => {
    return (
        <header>
            <img src={logo} alt="Logo" style={{ height: '50px' }} />
            <h1>{props.title}</h1>
            <span className='total-items'>Items: {props.itemTotal}</span>
        </header>
    );
}

const Item = (props) => {
    return (
        <div className='item'>
            <button className='remove-item' onClick={() => props.removeItem(props.id)}/>
            <span className='item-name'>{props.name}</span>
            <Counter streak={props.streak} />
        </div>
    );
}

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

const App = () => {
    const [items, setItems] = useState([
        {
            name: "Sleep 8 hrs",
            streak: 5,
            id: 1
        },
        {
            name: "Write anything",
            streak: 5,
            id: 2
        },
        {
            name: "Meditate / Pray",
            streak: 5,
            id: 3
        },
        {
            name: "Exercise",
            streak: 5,
            id: 4
        },
        {
            name: "Cold Shower",
            streak: 5,
            id: 5
        },
        {
            name: "Work on a Goal",
            streak: 5,
            id: 6
        }
    ]);

    const [newItemName, setNewItemName] = useState('');

    const handleRemoveItem = (id) => {
        setItems(prevItems => prevItems.filter(i => i.id !== id))
    }

    const handleAddItem = () => {
        const newItem = {
            name: newItemName,
            streak: 0, 
            id: Math.max(0, ...items.map(i => i.id)) + 1 
        };
        setItems(prevItems => [...prevItems, newItem]);
        setNewItemName(''); // Reset input field after adding

    return (
        <div className='todo-list'>
            <Header title='The 7 Paths' itemTotal={items.length} />
            {items.map(item => (
                <Item 
                    name={item.name}
                    id={item.id}
                    streak={item.streak}
                    key={item.id} 
                    removeItem={handleRemoveItem}
                />
            ))}
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
