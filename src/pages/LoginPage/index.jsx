import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { Box, Button, Input, Flex, Heading, Text, Image, useMediaQuery } from '@chakra-ui/react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isSmallScreen] = useMediaQuery("(max-width: 480px)");
  
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/main/chat'); // Redirect to the main chat after login
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error (e.g., show an error message)
    }
  };

  const handleJoinNow = () => {
    navigate('/join');
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/main/chat'); // Redirect after successful sign-in
    } catch (error) {
      console.error('Google sign-in failed:', error);
      // Handle Google sign-in error
    }
  };

  return (
    <Flex direction="column" height="100vh" overflowY="auto">
      {/* Header */}
      <Box width="full" p={4} borderBottom="1px solid" borderColor="gray.200">
        <Flex justify="space-between" align="center">
          <Heading size={isSmallScreen ? "sm" : "md"}>The Digital Builders</Heading>
          <Button onClick={handleJoinNow} colorScheme="blue" size={isSmallScreen ? "sm" : "md"}>Join Now</Button>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Flex
        flex={1}
        p={isSmallScreen ? 4 : 10}
        direction={isSmallScreen ? "column-reverse" : "row"}
        align="center"
        justify="center"
      >
        {/* Left Side: Bold Statement and Tagline */}
        <Flex
          direction="column"
          flex={1}
          justify="center"
          align={isSmallScreen ? "center" : "flex-start"}
          textAlign={isSmallScreen ? "center" : "left"}
          mb={isSmallScreen ? 4 : 0}
        >
          <Heading size={isSmallScreen ? "lg" : "2xl"} mb={4}>Digital Builders</Heading>
          <Text fontSize={isSmallScreen ? "sm" : "xl"} mb={4}>Where coding meets creativity, and community thrives.</Text>
          
          {/* Login Form */}
          <Box maxWidth={isSmallScreen ? "full" : "400px"}>
            {/* ... (existing login form code) */}
          </Box>
        </Flex>

        {/* Right Side: Image Placeholder */}
        <Box flex={1} minWidth={isSmallScreen ? "0" : "300px"} width={isSmallScreen ? "100%" : "auto"}>
          <Image src="/hero2.png" alt="Hero Image" objectFit="cover" borderRadius="md" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default LoginPage;