import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navs from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Homepage';
import ToDo from './Components/ToDo';
import ErrorComponent from './Components/ErrrorComponent';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (token) {
      setUser(token);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          {user ? (
            <Route path="/ToDo" element={<ToDo />} />
          ) : (
            <Route path="/ToDo" element={<Navigate to="/error" />} />
          )}
          <Route path="/error" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
