// src/styles/itemStyles.ts
export const itemStyles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.2em',
      borderBottom: '2px solid #090909',
      letterSpacing: '2px',
    },
    itemName: {
      flexGrow: 1,
      lineHeight: '3.5em',
      color: '#030303',
    },
    removeItem: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: '1px solid #0f0f0f',
      cursor: 'pointer',
      margin: '0 1.5rem',
      padding: '0 0 3px 0',
      background: 'none',
      boxShadow: '0 0 0.1rem #010101b1',
      _hover: {
        textDecoration: 'line-through',
      },
    },
    // Add more styles as needed
  };
  