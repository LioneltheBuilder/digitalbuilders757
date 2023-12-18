import React from 'react';
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import logo from './images/logo.png';


const items = [
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

]



const Header = (props) => {
    return (
        <header>
            <img src={logo} alt="Logo" style={{ height: '50px' }} />
            <h1>{props.title}</h1>\
            <span className='total-items'>Items: {props.itemTotal}</span>
        </header>
    )
}

const Item = (props) => {
    return (
        <div className='item'>
            <button className='remove-item' />
            <span className='item-name'>{props.name}</span>
            <Counter />

        </div>
    )
}

const Counter = () => {
    const [streak, setStreak] = useState(0)

    return (
        <div className='quantity'>
            <span className='qty-label'> Streak</span>
            <button className='increment'>+</button>
            <button className='decrement'>-</button>
            <span className='quantity-amount'>{streak}</span>
        </div>

    )
}

const App = (props) => {
    return (
        <div className='todo-list'>
            <Header
                title='The 7 Paths'
                itemTotal={props.initialList.length} />

            {/* 7 Paths */}
            {props.initialList.map(item =>
                <Item
                    name={item.name}
                    key={item.id}

                />
            )}
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App initialList={items} />
    </StrictMode>

);