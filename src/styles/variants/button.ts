import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
  bg: 'navyBlue',
  color: 'white',
  fontWeight: 'medium',
  rounded: 'md',
  fontSize: 'md',
  height: '36px',
  _hover: {
    bg: '#19366B',
  },
});

const secondary = defineStyle({
  bg: 'white',
  color: 'navyBlue',
  border: '1px solid',
  borderColor: 'navyBlue',
  fontWeight: 'medium',
  rounded: 'md',
  fontSize: 'md',
  height: '36px',
  _hover: {
    borderColor: 'white',
  },
});

const buttonTheme = defineStyleConfig({
  variants: { primary, secondary },
});

export default buttonTheme;
