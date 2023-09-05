import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function LoginPage() {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const navigate = useNavigate()

   const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:8080/login', { username, password }, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        });
        const token = response.data;
        localStorage.setItem('authToken', token);
        navigate('/')
    } catch (error) {
        alert("Invalid credentials");
    }
  };

  return (
    <div className="page-container">
      <div className='container'>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="primary-button" onClick={handleLogin}>Login</button>
      <div>No account? Register <Link to="/sign-up" > here </Link></div>
      </div>
    </div>
  );
}

export default LoginPage;
