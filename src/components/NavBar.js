import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import './NavBar.css';
import { useEventContext } from './EventContext';
import EventUploadForm from './EventUploadForm';





const Navbar = ({links}) => {

  const { addEvent } = useEventContext();
  const [showForm, setShowForm] = useState(false);

  const handleEventUpload = (newEvent) => {
    addEvent(newEvent);
    setShowForm(false); 
  };

  const handlePublicarClick = () => {
    setShowForm(true);
  };


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
        <button className="publish-button" onClick={handlePublicarClick}>Publicar</button>
        {showForm && <EventUploadForm handleEventUpload={handleEventUpload} />}
        <Dropdown
          show={showDropdown}
          onToggle={toggleDropdown}
          drop="left"
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
