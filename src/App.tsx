import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CredentialManager from './components/CredentialManager';
import NetworkManager from './components/NetworkManager';
import ReportGenerator from './components/ReportGenerator';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';

function App() {
  const [theme, setTheme] = useState('light');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'light' ? 'bg-orange-50' : 'bg-gray-900 text-white'}`}>
        {isAuthenticated && <Navbar theme={theme} toggleTheme={toggleTheme} onLogout={handleLogout} />}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/credentials" element={isAuthenticated ? <CredentialManager /> : <Navigate to="/" />} />
            <Route path="/network" element={isAuthenticated ? <NetworkManager /> : <Navigate to="/" />} />
            <Route path="/reports" element={isAuthenticated ? <ReportGenerator /> : <Navigate to="/" />} />
            <Route path="/profile" element={isAuthenticated ? <UserProfile /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;