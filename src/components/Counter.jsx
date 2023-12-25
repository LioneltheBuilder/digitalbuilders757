import React, { useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { counterStyles } from '../styles/counterStyles';

const Counter = ({ streak }) => {
    const [currentStreak, setCurrentStreak] = useState(streak);

    const incrementStreak = () => setCurrentStreak(prevStreak => prevStreak + 1);
    const decrementStreak = () => currentStreak > 0 && setCurrentStreak(prevStreak => prevStreak - 1);

    return (
        <Box sx={counterStyles.container}>
            <Text sx={counterStyles.qtyLabel}>Streak</Text>
            <Button sx={counterStyles.increment} onClick={incrementStreak}>+</Button>
            <Button sx={counterStyles.decrement} onClick={decrementStreak}>-</Button>
            <Text sx={counterStyles.quantityAmount}>{currentStreak}</Text>
        </Box>
    );
};

export default Counter;
