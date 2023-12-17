import React from 'react';
import { StrictMode } from 'react';
import { createRoot} from 'react-dom/client';


import logo from './images/logo.png'; 




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
                <button className='remove-item'/>
                <span className='item-name'>{props.name}</span>
                <Counter quantity={props.streak} />
 
            </div>
        )
    }

    const Counter = () => {
        return (
            <div className='quantity'>
            <span className='qty-label'> Streak</span>
            <button className='increment'>+</button>
            <button className='decrement'>-</button>
            <span className='quantity-amount'>1</span>
        </div>

        )
    }

    const App = () => {
        return (
            <div className ='todo-list'>
                <Header 
                    title='The 7 Paths' 
                    itemTotal={7} />

                {/* To do List */}
                <Item name="Sleep 8 hrs" streak={5} />
                <Item name="Write anything" streak={5} />
                <Item name="Meditate / Pray" streak={5} />
                <Item name="Exercise" streak={5} />
                <Item name="Cold Shower" streak={5} />
                <Item name="Work on a Goal" streak={5} />
            </div>
        )
    }

    const root = createRoot(document.getElementById('root'));
    root.render(
        <StrictMode>
        <App/> 
        </StrictMode>

);