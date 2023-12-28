// MainPage/index.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../../components/Header';
import ChatRoom from '../../components/ChatRoom';
import TodoList from '../ToDoListPage';

const MainPage = () => {
  return (
    <>
      <Header title="The Digital Builders" />
      <Routes>
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="*" element={<Navigate to="/chat" />} />
      </Routes>
    </>
  );
};

export default MainPage;
