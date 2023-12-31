import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Box, Button, Input, Flex, Heading, VStack, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; // Ensure the path is correct

const JoinPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/main/chat'); // Navigate to the main chat after account creation
    } catch (error) {
      console.error('Account creation failed:', error);
      toast({
        title: "Account creation failed",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/main/chat'); // Navigate to the main chat after sign-in
    } catch (error) {
      console.error('Sign-in failed:', error);
      toast({
        title: "Sign-in failed",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Box width="full" p={4}>
        <Heading size="lg" textAlign="center">Welcome to Digital Builders</Heading>
      </Box>

      <VStack spacing={4} width={['90%', '70%', '50%', '30%']} p={4} borderWidth="1px" borderRadius="lg">
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
        <Button colorScheme="blue" width="full" onClick={handleCreateAccount}>Create Account</Button>
        <Text>or</Text>
        <Button colorScheme="green" width="full" onClick={handleSignIn}>Sign In</Button>
      </VStack>
    </Flex>
  );
};

export default JoinPage;
