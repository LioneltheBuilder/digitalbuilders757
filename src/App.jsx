import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useAuthState } from 'react-firebase-hooks/auth';

import { UserProvider } from './contexts/UserContext.jsx';
import { TodoListsProvider } from './contexts/TodoListsContext.jsx';
import LoginPage from './pages/LoginPage/index.jsx';
import MainPage from './pages/MainPage'; // Import MainPage
import { auth } from './firebase';
import { GlobalStyles } from './styles/globalStyles';

const customTheme = extendTheme(GlobalStyles);

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
