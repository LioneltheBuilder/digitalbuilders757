import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; // Update the path as needed
import { Box, Button, Input, Flex, Image } from '@chakra-ui/react';

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
    <Flex direction="column" align="center" justify="center" height="100vh">
      {/* Logo Banner */}
      <Box mb={8}>
        <Image src="/loginlogo.png" alt="Logo" />
      </Box>

      {/* Login Form */}
      <Box width={['90%', '70%', '50%', '30%']} p={4} borderWidth="1px" borderRadius="lg">
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb={2}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mb={2}
          />
          <Button type="submit" colorScheme="blue" mb={2}>Log In</Button>
        </form>

        {/* Google Sign-In Button */}
        <Button onClick={signInWithGoogle} colorScheme="red">Sign in with Google</Button>
      </Box>
    </Flex>
  );
};

export default LoginPage;
