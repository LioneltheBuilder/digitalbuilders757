import React, { useState, useRef, useEffect } from 'react';
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  serverTimestamp,
} from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage.jsx';
import { auth } from '../firebase';
import { firestore } from '../firebase'; // Import 'firestore' from your firebase.js file

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(firestore, 'messages'); // Define messagesRef here
  const q = query(messagesRef, orderBy('createdAt'), limit(25));

  const [messages] = useCollectionData(q, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user) {
      // Handle the case when the user is not authenticated.
      console.error('User not authenticated');
      return;
    }

    try {
      await addDoc(messagesRef, {
        text: formValue,
        createdAt: serverTimestamp(),
        uid: user.uid,
        photoURL: user.photoURL,
      });

      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
    // Scroll to the latest message when messages change.
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something nice"
        />
        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
