import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { useAuthState } from 'react-firebase-hooks/auth';

import customTheme from './styles/theme';
import { UserProvider } from './contexts/UserContext.jsx';
import { TodoListsProvider } from './contexts/TodoListsContext.jsx';
import LoginPage from './pages/LoginPage/index.jsx';
import MainPage from './pages/MainPage'; // Import MainPage
import JoinPage from './pages/JoinPage'; // Import JoinPage
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
              <Route path="/join" element={<JoinPage />} /> {/* Add JoinPage route */}
              <Route path="/" element={user ? <Navigate to="/main/chat" /> : <Navigate to="/login" />} />
              <Route path="/main/*" element={<MainPage />} />
              {/* Add additional routes as needed */}
            </Routes>
          </Router>
        </TodoListsProvider>
      </UserProvider>
    </ChakraProvider>
  );
};

export default App;
