// App.js or your main component file
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { useAuthState } from 'react-firebase-hooks/auth';

// App.js or your main component file
import customTheme from './styles/theme';
import { UserProvider } from './contexts/UserContext.jsx';
import { TodoListsProvider } from './contexts/TodoListsContext.jsx';
import LoginPage from './pages/LoginPage/index.jsx';
import MainPage from './pages/MainPage'; // Import MainPage
import { auth } from './firebase';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <ChakraProvider theme={customTheme}>
      <UserProvider>
        <TodoListsProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={user ? <Navigate to="/main/chat" /> : <Navigate to="/login" />} />
              <Route path="/main/*" element={<MainPage />} />
            </Routes>
          </Router>
        </TodoListsProvider>
      </UserProvider>
    </ChakraProvider>
  );
};

export default App;
