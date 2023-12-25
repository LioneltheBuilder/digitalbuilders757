import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase'; // Adjust the path as necessary
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useUser } from './UserContext';

const TodoListsContext = createContext();

export const useTodoLists = () => useContext(TodoListsContext);

export const TodoListsProvider = ({ children }) => {
    const [todoLists, setTodoLists] = useState([]);
    const user = useUser();

    useEffect(() => {
        if (!user) {
            setTodoLists([]);
            return;
        }

        const listsRef = collection(db, 'todoLists');
        const q = query(listsRef, where('userId', '==', user.uid));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const lists = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTodoLists(lists);
        });

        return () => unsubscribe();
    }, [user]);

    return (
        <TodoListsContext.Provider value={todoLists}>
            {children}
        </TodoListsContext.Provider>
    );
};
