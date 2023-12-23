import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import logo from './images/logo.png';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBZDa5wlrocS1iyBygFnuXboDyqSJhw1wE",
    authDomain: "paths-b4263.firebaseapp.com",
    projectId: "paths-b4263",
    storageBucket: "paths-b4263.appspot.com",
    messagingSenderId: "593046877890",
    appId: "1:593046877890:web:1dde0a03e3c7181e7cad5b",
    measurementId: "G-LBKBQ1XBDC"

})

const auth = firebase.auth();
const firestore = firebase.firestore();


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
    );npm   
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
            streak: 0,
            id: 1
        },
        {
            name: "Write anything",
            streak: 0,
            id: 2
        },
        {
            name: "Meditate / Pray",
            streak: 0,
            id: 3
        },
        {
            name: "Exercise",
            streak: 0,
            id: 4
        },
        {
            name: "Cold Shower",
            streak: 0,
            id: 5
        },
        {
            name: "Work on a Goal",
            streak: 0,
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

    }

    return (
        <div className='todo-list'>
            <Header title='The 7 Paths' itemTotal={items.length} />
            <div>
                <input 
                    type="text" 
                    value={newItemName} 
                    onChange={(e) => setNewItemName(e.target.value)} 
                    placeholder="Add new item" 
                />
                <button onClick={handleAddItem}>Add Item</button>
            </div>
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
