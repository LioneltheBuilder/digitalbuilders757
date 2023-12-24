import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4
import Header from './components/Header';
import Item from './components/Item';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';
import { auth } from './firebase'; // Make sure to import 'auth' from your 'firebase.js' file
import { ChakraProvider } from "@chakra-ui/react";

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
    <ChakraProvider>
      <div className="app">
        <Header title="The 7 Paths" itemTotal={items.length} />

        {user ? (
          <>
            <SignOut />

            <div className="todo-list">
              <input
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Add new item"
              />
              <button onClick={handleAddItem}>Add Item</button>

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
          <SignIn />
        )}
      </div>
    </ChakraProvider>
  );
};

export default App;