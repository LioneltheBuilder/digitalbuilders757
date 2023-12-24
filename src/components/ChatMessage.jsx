import React from 'react';
import { auth } from '../firebase';

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const auth = getAuth();
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="User avatar" />
            <p>{text}</p>
        </div>
    );
}

export default ChatMessage;
