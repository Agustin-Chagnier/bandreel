import React from 'react';

const Navbar = ({ links }) => {
  return (
    <div className="navbar">
      <h1>LocalSound</h1>
      <div className="navbar-buttons">
        <button className="publish-button">Publicar</button>
        <div className="dropdown">
          <button className="dropbtn">Menú</button>
          <div className="dropdown-content">
            {links.map((link) => (
              <a key={link.id} href={link.href}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
