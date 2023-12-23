import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './index.css'; 
// Assuming you have an element with id 'root' in your index.html
const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
