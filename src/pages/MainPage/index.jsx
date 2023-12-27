// src/pages/MainPage/index.jsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../../components/Header'; // Adjust the import path as necessary
import SignOut from '../../components/SignOut'; // Adjust the import path as necessary
import ChatRoom from '../../components/ChatRoom'; // Adjust the import path as necessary
import TodoList from '../TodoList'; // Adjust the import path as necessary

const MainPage = () => {
  return (
    <>
      <Header title="Your Logo Here" />
      <SignOut />
      {/* Navigation Links can go here */}
      <Routes>
        <Route path="chat" element={<ChatRoom />} />
        <Route path="todolist" element={<TodoList />} />
        <Route path="*" element={<Navigate to="chat" />} />
      </Routes>
    </>
  );
};

export default MainPage;
