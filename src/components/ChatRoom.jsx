import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { collection, addDoc, query, orderBy, limit, serverTimestamp } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';
import { auth, db } from '../firebase';
import { Box, Input, Button } from '@chakra-ui/react';
import { chatRoomStyles } from '../styles/chatRoomStyles';

function ChatRoom() {
    const dummy = useRef();
    const messagesRef = collection(db, 'messages');
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
                id: uuidv4(),
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
            <Box as="main" sx={chatRoomStyles.container}>
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <span ref={dummy}></span>
            </Box>
            <Box as="form" onSubmit={sendMessage} sx={chatRoomStyles.form}>
                <Input
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder="Say something"
                    sx={chatRoomStyles.input}
                />
                <Button type="submit" disabled={!formValue} sx={chatRoomStyles.button}>
                    🕊️
                </Button>
            </Box>
        </>
    );
}

export default ChatRoom;
