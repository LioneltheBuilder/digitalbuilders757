import React from 'react';
import { signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { auth } from '../firebase';
import { Button } from '@chakra-ui/react';
import { signOutStyles } from '../styles/signOutStyles';

const SignOut = () => {
    const authInstance = getAuth();
    return auth.currentUser && (
        <Button onClick={() => signOut(authInstance)} sx={signOutStyles.button}>
            Sign Out
        </Button>
    );
};

export default SignOut;
