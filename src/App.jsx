import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext.jsx';
import { TodoListsProvider } from './contexts/TodoListsContext.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';



import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Item from './components/Item';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';
import { auth } from './firebase';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { GlobalStyles } from './styles/globalStyles';

// Create a custom theme
const theme = extendTheme(GlobalStyles);

const App = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([
    {
      name: "Sleep 8 hrs",
      streak: 0,
      id: 1
    },
    {
      name: "Write anything",
      streak: 0,
      id: 2
    },
    {
      name: "Meditate / Pray",
      streak: 0,
      id: 3
    },
    {
      name: "Exercise",
      streak: 0,
      id: 4
    },
    {
      name: "Cold Shower",
      streak: 0,
      id: 5
    },
    {
      name: "Work on a Goal",
      streak: 0,
      id: 6
    }
  ]);

  const [newItemName, setNewItemName] = useState('');

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  const handleAddItem = () => {
    const newItem = {
      name: newItemName,
      streak: 0,
      id: uuidv4(), // Generates a unique ID
    };
    setItems((prevItems) => [...prevItems, newItem]);
    setNewItemName('');
  };

  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <TodoListsProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={
                <div className="app">
                  {user ? (
                    <>
                      {/* Authenticated user content */}
                      <Header title="The 7 Paths" itemTotal={items.length} />
                      <SignOut />
                      <div className="todo-list">
                        {items.map((item) => (
                          <Item
                            name={item.name}
                            id={item.id}
                            streak={item.streak}
                            key={item.id}
                            removeItem={() => handleRemoveItem(item.id)}
                          />
                        ))}
                      </div>
                      <ChatRoom />
                    </>
                  ) : (
                    <LoginPage /> // This line was causing the error, make sure it's correct
                  )}
                </div>
              } />
            </Routes>
          </Router>
        </TodoListsProvider>
      </UserProvider>
    </ChakraProvider>
  );
};

export default App;