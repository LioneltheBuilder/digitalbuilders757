import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { itemStyles } from '../styles/itemStyles';
import Counter from './Counter';

const Item = ({ id, name, streak, removeItem }) => {
    return (
        <Box sx={itemStyles.container}>
            <Button sx={itemStyles.removeItem} onClick={() => removeItem(id)} />
            <Text sx={itemStyles.itemName}>{name}</Text>
            <Counter streak={streak} />
        </Box>
    );
};

export default Item;
