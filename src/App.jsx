import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';

// This component acts as a guard.
// If activeSession exists and is not expired, it renders the page. Otherwise redirects to Login.
const ProtectedRoute = ({ children }) => {
  let session;
  try {
    session = JSON.parse(localStorage.getItem('activeSession'));
  } catch {
    session = null;
  }
  if (!session || session.expiresAt < Date.now()) {
    localStorage.removeItem('activeSession');
    return <Navigate to="/" />;
  }
  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* The Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;