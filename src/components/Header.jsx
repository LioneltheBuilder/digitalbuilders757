import React from 'react';
import { Box, Text, Image, Flex, Link } from '@chakra-ui/react';
import logo from '/loginlogo.png';
import { headerStyles } from '../styles/headerStyles';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom

const Header = ({ title, itemTotal }) => {
    return (
        <Box as="header" sx={headerStyles.container}>
            <Image src={logo} alt="Logo" boxSize="50px" />
            <Flex justify="space-between" align="center" width="100%">
                <Text as="h1" sx={headerStyles.title}>{title}</Text>

                {/* Navigation Links */}
                <Flex as="nav">
                    <Link as={RouterLink} to="/main/chat" mr={4}>Chat</Link>
                    <Link as={RouterLink} to="/main/todolist">ToDo List</Link>
                </Flex>
            </Flex>

          
        </Box>
    );
};

export default Header;
