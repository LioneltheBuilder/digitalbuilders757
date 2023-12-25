import { Navigate } from 'react-router-dom';
import { useAuth } from './path/to/authHook'; // Adjust the path to your auth hook

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Replace with your actual authentication logic

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Usage in App.js
<Route path="/" element={<ProtectedRoute><TodoList /></ProtectedRoute>} />
