// src/styles/chatMessageStyles.ts
export const chatMessageStyles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      padding: '0.5rem',
      borderRadius: '0.5rem',
      margin: '0.5rem',
    },
    sent: {
      flexDirection: 'row-reverse',
      backgroundColor: '#0b93f6',
      alignSelf: 'flex-end',
    },
    received: {
      backgroundColor: '#e5e5ea',
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
    },
  };
  