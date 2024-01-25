import React from 'react';
// import Button from '@mui/material/Button';
import Menu from './components/header/Header'
import Home from './pages/home/Home';
import './App.css';
// import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import UserPage from './pages/userPage/UserPage';
import LandingPage from './pages/landingPage/LandingPage';
import Footer from './components/footer/Footer';


function App() {
  return (
 
      <Router>
              <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userpage" element={<UserPage />} />
      </Routes>

<Footer />
    </Router>

  );
}

export default App;
