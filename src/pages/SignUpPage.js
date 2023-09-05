import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function AppicationPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      if (!username || !password || !name || !surname) {
        return alert('Please complete all the fields!')
      }
      await axios.post('http://localhost:8080/students', {
        username,
        password,
        name,
        surname
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
      alert('Registered successfully! Please log in to continue ...');
      navigate('/login')
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="page-container">
       <div className="container">
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
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
      <button className="primary-button" onClick={handleSignup}>Sign Up</button>
      <div>Already have an account? Log in <Link to="/login" > here </Link></div>
      </div>
    </div>
  );
}

export default AppicationPage;
