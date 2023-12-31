export const GlobalStyles = {
  styles: {
    global: {
      'html, body': {
        background: '#F2F4F6', // Secondary color
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
        background: '#F2F4F6', // Secondary color
      },
      'main::-webkit-scrollbar-thumb': {
        background: '#007BFF', // Primary color
      },
      // ... add other global styles here
    },
  },
};
