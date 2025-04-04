import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <nav style={{ marginBottom: 20 }}>
          <Link to="/signup" style={{ marginRight: 10 }}>Sign Up</Link>
          <Link to="/login">Login</Link>
        </nav>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
