import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4
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
import { auth, db } from '../firebase'; // Importing both auth and db from firebase

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(db, 'messages'); // Using db for Firestore operations
  const q = query(messagesRef, orderBy('createdAt'), limit(25));

  const [messages] = useCollectionData(q, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user) {
      console.error('User not authenticated');
      return;
    }

    try {
      await addDoc(messagesRef, {
        id: uuidv4(), // Generate a UUID for each new message
        text: formValue,
        createdAt: serverTimestamp(),
        uid: user.uid,
        photoURL: user.photoURL,
      });

      setFormValue('');
      dummy.current?.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))
        }

        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something"
        />
        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}

export default ChatRoom;
