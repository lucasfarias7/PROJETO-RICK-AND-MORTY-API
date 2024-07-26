// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Se você estiver usando um CSS separado

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/characters" className="navbar-link">Personagens</Link>
        </li>
        <li className="navbar-item">
          <Link to="/episodes" className="navbar-link">Episódios</Link>
        </li>
        <li className="navbar-item">
          <Link to="/locations" className="navbar-link">Localizações</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
