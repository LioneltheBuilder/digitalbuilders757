import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './variants';

const theme = extendTheme({
  colors: {
    navyBlue: '#00205B',
  },
  components: { Button: buttonTheme },
});

export default theme;
