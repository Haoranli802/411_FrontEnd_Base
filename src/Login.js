import React, { useState } from 'react';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in with\nUsername: ${form.username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="username"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        required
      /><br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      /><br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;