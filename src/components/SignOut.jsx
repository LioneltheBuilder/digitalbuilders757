import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from '@chakra-ui/react';
import { signOutStyles } from '../styles/signOutStyles';
import { auth } from '../firebase'; // Make sure to import auth

const SignOut = () => {
    const navigate = useNavigate(); // Create navigate instance

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate('/login'); // Redirect to login page after signing out
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return auth.currentUser && (
        <Button onClick={handleSignOut} sx={signOutStyles.button}>
            Sign Out
        </Button>
    );
};

export default SignOut;
