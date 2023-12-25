// LoginPage.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; // Update the path as needed
import { Box, Button, Input } from '@chakra-ui/react';
import ThreeBackground from '../../components/ThreeBackground.jsx'; // Update the path as needed


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to the home page after login
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error (e.g., show an error message)
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/'); // Redirect after successful sign in
    } catch (error) {
      console.error('Google sign-in failed:', error);
      // Handle Google sign-in error
    }
  };

  return (
    <Box>
      {/* Login form UI */}
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Log In</Button>
      </form>

      {/* Google Sign-In Button */}
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </Box>
  );
};

export default LoginPage;
