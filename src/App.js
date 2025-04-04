import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Upload from './Upload';
import Home from './Home';
import UserContext from './UserContext';

const Navigation = () => {
  const location = useLocation();

  // Show Sign Up / Login links only on main page
  if (location.pathname !== '/') return null;

  return (
    <nav style={{ marginBottom: 20 }}>
      <Link to="/signup" style={{ marginRight: 10 }}>Sign Up</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

function App() {
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Router>
        <div style={{ padding: 20 }}>
          <Navigation />

          <Routes>
            <Route path="/" element={<div><h1>Welcome to the Main Page</h1></div>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;