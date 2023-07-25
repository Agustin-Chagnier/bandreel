import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <h1>LocalSound</h1>
      <div className="header-buttons">
        <button className="publish-button">Publicar</button>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleMenu}>
            Menú
          </button>
          {menuOpen && (
            <div className="dropdown-content">
              <a href="/">Inicio</a>
              <a href="/buscar">Buscar</a>
              <a href="/calendario">Calendario</a>
              <a href="/recomendaciones">Recomendaciones</a>
              <a href="/perfil">Perfil</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
