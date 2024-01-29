import React from 'react';
// import Menu from './components/header/Header'
import Home from './pages/home/Home';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import UserPage from './pages/userPage/UserPage';
import { UserType } from './pages/userPage/UserTypes';
import Footer from './components/footer/Footer';
import Nav from './components/navBar/NavBar';
import Confirmation from './pages/confirmation/Confirmation';
import Config from './pages/config/Config';
import PlantsList from './pages/result/Result';
import AdminPage from './pages/adminPage/AdminPage';
import ThankyouPage from './pages/thankyouPage/ThankyouPage';


// function App() {
//   const [user, setUser] = useState<UserType | null>(null);

//   const handleLogin = (userData: UserType) => {
//     setUser(userData);
//   };

//    const handleLogout = () => {
//     setUser(null);
// console.log('User in App:', user);

//   return (
 
//       <Router>
             
//              <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/userpage" element={<UserPage user={user} onLogout={handleLogout} />} />
//         <Route path="/confirmation" element={<Confirmation />} />
//         <Route path="/config" element={<Config />} />
//         <Route path="/resultado" element={<PlantsList />} />
//         <Route path="/admin" element={<AdminPage />} />
//       </Routes>

// <Footer />
//     </Router>

//   );
// }

// export default App;

function App() {
  const [user, setUser] = useState<UserType | null>(null);

  const handleLogin = (userData: UserType) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    console.log('User in App:', user);
  };

  return (
    <Router>
      <Nav  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/userpage"
          element={<UserPage user={user} onLogout={handleLogout} />}
        />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/config" element={<Config />} />
        <Route path="/resultado" element={<PlantsList />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/obrigado" element={<ThankyouPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
