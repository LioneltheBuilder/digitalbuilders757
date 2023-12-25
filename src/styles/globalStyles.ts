import { GlobalStyleProps, mode } from '@chakra-ui/theme-tools';

export const GlobalStyles = {
  styles: {
    global: (props: GlobalStyleProps) => ({
      'html, body': {
        background: '#0f0f0f',
        margin: '0',
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif`,
        textTransform: 'uppercase',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      'main::-webkit-scrollbar': {
        width: '0.25rem',
      },
      'main::-webkit-scrollbar-track': {
        background: '#1e1e24',
      },
      'main::-webkit-scrollbar-thumb': {
        background: '#6649b8',
      },
      // ... add other global styles here
    }),
  },
};
