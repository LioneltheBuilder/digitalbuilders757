import React from 'react';
import { auth } from '../firebase';
import { Box, Image, Text } from '@chakra-ui/react';
import { chatMessageStyles } from '../styles/chatMessageStyles';

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser?.uid ? 'sent' : 'received';

    return (
        <Box sx={{ ...chatMessageStyles.container, ...(messageClass === 'sent' ? chatMessageStyles.sent : chatMessageStyles.received) }}>
            <Image src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="User avatar" sx={chatMessageStyles.avatar} />
            <Text sx={chatMessageStyles.text}>{text}</Text>
        </Box>
    );
}

export default ChatMessage;
