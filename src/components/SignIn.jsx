import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { getAuth } from 'firebase/auth';
import { Button, Text, Box } from '@chakra-ui/react';
import { signInStyles } from '../styles/signInStyles';

const SignIn = () => {
    const signInWithGoogle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    return (
        <Box textAlign="center" p="4">
            <Button onClick={signInWithGoogle} sx={signInStyles.button}>
                Sign in with Google
            </Button>
            <Text sx={signInStyles.text}>
                Do not violate the community guidelines or you will be banned for life!
            </Text>
        </Box>
    );
};

export default SignIn;
