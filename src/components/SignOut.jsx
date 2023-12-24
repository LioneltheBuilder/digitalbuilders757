import React from 'react';
import { signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { auth } from '../firebase';

const SignOut = () => {
    const authInstance = getAuth(); // Rename the variable to avoid naming conflict
    return auth.currentUser && (
        <button onClick={() => signOut(authInstance)}>Sign Out</button>
    );
}

export default SignOut;
