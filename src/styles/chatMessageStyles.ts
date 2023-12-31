export const chatMessageStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
    borderRadius: '0.5rem',
    margin: '0.5rem',
    backgroundColor: '#F2F4F6', // Secondary color
  },
  sent: {
    flexDirection: 'row-reverse',
    backgroundColor: '#007BFF', // Primary color
    alignSelf: 'flex-end',
  },
  received: {
    backgroundColor: '#E9ECEF', // Lighter shade of secondary
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    margin: '2px 5px',
  },
  text: {
    padding: '0.5rem 1rem',
    borderRadius: '1rem',
    color: '#343A40', // Dark color
  },
};
