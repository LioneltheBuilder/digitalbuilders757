import React from 'react';
import { auth } from '../firebase'; // Use the imported 'auth'

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    // No need to get auth again, use the imported 'auth'
    const messageClass = uid === auth.currentUser?.uid ? 'sent' : 'received'; // Use optional chaining for currentUser

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="User avatar" />
            <p>{text}</p>
        </div>
    );
}

export default ChatMessage;
