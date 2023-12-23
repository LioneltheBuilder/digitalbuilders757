import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import logo from './images/logo.png';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

import { collection, addDoc, query, orderBy, limit, serverTimestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZDa5wlrocS1iyBygFnuXboDyqSJhw1wE",
    authDomain: "paths-b4263.firebaseapp.com",
    projectId: "paths-b4263",
    storageBucket: "paths-b4263.appspot.com",
    messagingSenderId: "593046877890",
    appId: "1:593046877890:web:1dde0a03e3c7181e7cad5b",
    measurementId: "G-LBKBQ1XBDC"

}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
const Header = (props) => {
    return (
        <header>
            <img src={logo} alt="Logo" style={{ height: '50px' }} />
            <h1>{props.title}</h1>
            <span className='total-items'>Items: {props.itemTotal}</span>
        </header>
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

const Item = (props) => {
    return (
        <div className='item'>
            <button className='remove-item' onClick={() => props.removeItem(props.id)} />
            <span className='item-name'>{props.name}</span>
            <Counter streak={props.streak} />
        </div>
    );
}

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    return (
        <>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <p>Do not violate the community guidelines or you will be banned for life!</p>
        </>
    );
}

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    );
}
    
function ChatRoom() {
    const dummy = useRef();
    const messagesRef = collection(firestore, 'messages');
    const q = query(messagesRef, orderBy('createdAt'), limit(25));

    const [messages] = useCollectionData(q, { idField: 'id' });
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;

        await addDoc(messagesRef, {
            text: formValue,
            createdAt: serverTimestamp(),
            uid,
            photoURL
        });

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    };
      
        return (<>
          <main>
      
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      
            <span ref={dummy}></span>
      
          </main>
      
          <form onSubmit={sendMessage}>
      
            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
      
            <button type="submit" disabled={!formValue}>🕊️</button>
      
          </form>
        </>)
    }
    
    function ChatMessage(props) {
        const { text, uid, photoURL } = props.message;
      
        const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
      
        return (<>
          <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
          </div>
        </>)
    }
    

const App = () => {
    const [user] = useAuthState(auth);
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
        setItems(prevItems => prevItems.filter(i => i.id !== id));
    };

    const handleAddItem = () => {
        const newItem = {
            name: newItemName,
            streak: 0,
            id: Math.max(0, ...items.map(i => i.id)) + 1
        };
        setItems(prevItems => [...prevItems, newItem]);
        setNewItemName('');
    };

    return (
        <div className='app'>
            <Header title='The 7 Paths' itemTotal={items.length} />

            {user ? (
                <>
                    <SignOut />

                    <div className='todo-list'>
                        <input 
                            type="text" 
                            value={newItemName} 
                            onChange={(e) => setNewItemName(e.target.value)} 
                            placeholder="Add new item" 
                        />
                        <button onClick={handleAddItem}>Add Item</button>

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

                    <ChatRoom /> {/* ChatRoom */}
                </>
            ) : (
                <SignIn /> /* SignIn */
            )}
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export default App;