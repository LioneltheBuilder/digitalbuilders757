import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const SignOut = () => {
    const auth = getAuth();
    return auth.currentUser && (
        <button onClick={() => signOut(auth)}>Sign Out</button>
    );
}

export default SignOut;
