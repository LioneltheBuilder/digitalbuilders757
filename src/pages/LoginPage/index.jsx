
import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; // Ensure the path is correct
import { Box, Button, Input, Flex, Heading, Text, Image, useMediaQuery } from '@chakra-ui/react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
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
    <Flex direction="column" height="100vh">
      {/* Header */}
      <Box width="full" p={4} borderBottom="1px solid" borderColor="gray.200">
        <Flex justify="space-between" align="center">
          <Heading size={isMobile ? "lg" : "md"}>The Digital Builders</Heading>
          <Button onClick={handleJoinNow} colorScheme="blue">Join Now</Button>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Flex
        flex={1}
        p={10}
        align="center"
        justify="center"
        direction={isMobile ? "column" : "row"}
      >
        {/* Conditional Image Placement for Mobile */}
        {isMobile && (
          <Box mb={4}>
            <Image src="/path-to-your-hero-image.jpg" alt="Hero Image" objectFit="cover" borderRadius="md" />
          </Box>
        )}

        {/* Left Side: Bold Statement and Tagline */}
        <Flex direction="column" flex={1} justify="center" align="flex-start" pr={isMobile ? 0 : 10} textAlign={isMobile ? "center" : "left"}>
          <Heading size={isMobile ? "xl" : "2xl"} mb={4}>Empower Your Tech Journey</Heading>
          <Text fontSize={isMobile ? "md" : "xl"} mb={4}>Join us and start transforming your future today.</Text>
          {/* Login Form */}
          <Box maxWidth={isMobile ? "100%" : "400px"}>
            {/* ... (existing login form code) */}
          </Box>
        </Flex>

        {/* Right Side: Image Placeholder for Desktop */}
        {!isMobile && (
          <Box flex="1">
            <Image src="/hero2.png" alt="Hero Image" objectFit="cover" borderRadius="md" />
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default LoginPage;