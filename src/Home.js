import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from './UserContext';

function Home() {
  const { username, setUsername } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUsername('');
    navigate('/');
  };

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <Link to="/upload">Go to Upload Page</Link><br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;