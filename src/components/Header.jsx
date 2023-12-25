import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import logo from '../images/logo.png';
import { headerStyles } from '../styles/headerStyles';

const Header = ({ title, itemTotal }) => {
    return (
        <Box as="header" sx={headerStyles.container}>
            <Image src={logo} alt="Logo" boxSize="50px" />
            <Text as="h1" sx={headerStyles.title}>{title}</Text>
            <Text className="total-items">Items: {itemTotal}</Text>
        </Box>
    );
}

export default Header;
