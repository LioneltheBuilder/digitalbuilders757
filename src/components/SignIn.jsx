import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import { getAuth } from 'firebase/auth';


const SignIn = () => {
    const signInWithGoogle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    return (
        <>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <p>Do not violate the community guidelines or you will be banned for life!</p>
        </>
    );
}

export default SignIn;
