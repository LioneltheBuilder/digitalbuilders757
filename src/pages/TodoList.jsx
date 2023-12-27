// TodoList.jsx
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from '../components/Item'; // Adjust the import path as necessary

const TodoList = () => {
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

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  const handleAddItem = (newItemName) => {
    const newItem = {
      name: newItemName,
      streak: 0,
      id: uuidv4(),
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
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
      {/* Include UI for adding a new item */}
      {/* You can also include SignOut here if it's relevant to the ToDo list */}
    </div>
  );
};

export default TodoList;
