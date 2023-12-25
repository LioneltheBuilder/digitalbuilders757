// src/styles/quantityStyles.ts
export const quantityStyles = {
    container: {
      display: 'grid',
      gridTemplateAreas: `
        "QTY increment value"
        "QTY decrement value"
      `,
    },
    qtyLabel: {
      gridArea: 'QTY',
      color: '#020202',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '0.8em',
    },
    increment: {
      gridArea: 'increment',
      border: 'none',
      backgroundColor: '#fff',
      margin: '0 0.5rem',
      padding: '0.33rem',
      width: '2rem',
      fontSize: '1.1rem',
      _hover: {
        background: '#83D97C',
      },
    },
    decrement: {
      gridArea: 'decrement',
      border: 'none',
      backgroundColor: '#fff',
      margin: '0 0.5rem',
      padding: '0.33rem',
      width: '2rem',
      fontSize: '1.1rem',
      _hover: {
        background: '#EF5350',
      },
    },
    quantityAmount: {
      gridArea: 'value',
      fontFamily: 'monospace',
      fontSize: '2em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '45px',
    },
  };
  