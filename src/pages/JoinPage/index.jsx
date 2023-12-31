// src/pages/JoinPage/index.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Box, Button, Input, Flex, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; // Update the path as needed

const JoinPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/main/chat'); // Navigate to the main chat after account creation
    } catch (error) {
      console.error('Account creation failed:', error);
      // Handle account creation error (e.g., show an error message)
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Box width="full" p={4}>
        <Heading size="lg" textAlign="center">Create Your Account</Heading>
      </Box>

      <Box width={['90%', '70%', '50%', '30%']} p={4} borderWidth="1px" borderRadius="lg">
        <form onSubmit={handleCreateAccount}>
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
          <Button type="submit" colorScheme="blue" width="full">Create Account</Button>
        </form>
      </Box>
    </Flex>
  );
};

export default JoinPage;
