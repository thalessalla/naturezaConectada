import React from 'react';
// import Menu from './components/header/Header'
import Home from './pages/home/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import UserPage from './pages/userPage/UserPage';
import Footer from './components/footer/Footer';
import Nav from './components/navBar/NavBar';

function App() {
  return (
 
      <Router>
             
             <Nav />
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
