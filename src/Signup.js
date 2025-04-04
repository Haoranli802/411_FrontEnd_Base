import React, { useState } from 'react';

function Signup() {
  const [form, setForm] = useState({ username: '', name: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signed up with\nUsername: ${form.username}\nName: ${form.name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        required
      /><br />
      <input
        type="name"
        name="name"
        placeholder="Name"
        value={form.name}
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
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;