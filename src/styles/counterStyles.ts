export const counterStyles = {
  container: {
    display: 'grid',
    gridTemplateAreas: `
      "QTY increment value"
      "QTY decrement value"
    `,
    className: 'quantity'
  },
  qtyLabel: {
    gridArea: 'QTY',
    color: '#343A40', // Dark color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '0.8em',
    className: 'qty-label'
  },
  increment: {
    gridArea: 'increment',
    border: 'none',
    backgroundColor: '#007BFF', // Primary color
    height: '100%',
    margin: '0 0.5rem',
    padding: '0.33rem',
    width: '2rem',
    fontSize: '1.1rem',
    _hover: {
      background: '#0056b3', // Darker shade of primary
    },
    className: 'increment'
  },
  decrement: {
    gridArea: 'decrement',
    border: 'none',
    backgroundColor: '#FD7E14', // Orange color
    height: '100%',
    margin: '0 0.5rem',
    padding: '0.33rem',
    width: '2rem',
    fontSize: '1.1rem',
    _hover: {
      background: '#c96e12', // Darker shade of orange
    },
    className: 'decrement'
  },
  quantityAmount: {
    gridArea: 'value',
    alignContent: 'center',
    fontFamily: 'monospace',
    fontSize: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45px',
    className: 'quantity-amount'
  },
  // Add more styles as needed
};
