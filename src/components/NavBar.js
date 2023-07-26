import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import './NavBar.css';

const Navbar = ({ links }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className="navbar">
      <h1>LocalSound</h1>
      <div className="navbar-buttons">
        <button className="publish-button">Publicar</button>
        <Dropdown
          show={showDropdown}
          onToggle={toggleDropdown}
          drop="left" // Añadimos la propiedad drop con valor "left"
        >
          <Dropdown.Toggle
            variant="secondary"
            id="dropdown-basic"
            onClick={toggleDropdown}
          >
            Menú
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {links.map((link) => (
              <Dropdown.Item
                key={link.id}
                href={link.href}
                onClick={closeDropdown}
              >
                {link.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
