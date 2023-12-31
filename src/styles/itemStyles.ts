export const itemStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.2em',
    borderBottom: '2px solid #343A40', // Dark color
    letterSpacing: '2px',
  },
  itemName: {
    flexGrow: 1,
    lineHeight: '3.5em',
    color: '#343A40', // Dark color
  },
  removeItem: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '1px solid #343A40', // Dark color
    cursor: 'pointer',
    margin: '0 1.5rem',
    padding: '0 0 3px 0',
    background: 'none',
    boxShadow: '0 0 0.1rem #343A40', // Dark color
    _hover: {
      textDecoration: 'line-through',
    },
  },
  // Add more styles as needed
};
