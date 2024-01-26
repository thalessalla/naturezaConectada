import React, { useState } from 'react';
import './Header.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';



const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container-menu">
    {/* <div>
  
      <div className='containerLogo'>
        <Link to="/"> <img src={logo} alt="Logo da Minha Empresa" /> </Link>
      </div>
  
      <div className='container-links-menu'>
        <nav className="menu-items">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Cadastre-se</Link>
        </nav>
      </div>
    </div> */}
  </div>
  );
};

export default Menu;