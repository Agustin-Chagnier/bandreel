import React, { useState } from 'react';
import { useEventContext } from './EventContext';

const EventUploadForm = () => {
  const { addEvent } = useEventContext();

  // State para manejar los datos ingresados por el usuario en el formulario
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    date: '',
    location: '',
    // Otras propiedades del evento...
  });

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Agregar el evento al contexto utilizando la función addEvent
    addEvent(formData);
    // Limpiar los campos del formulario después de agregar el evento
    setFormData({
      title: '',
      artist: '',
      date: '',
      location: '',
      // Limpiar otras propiedades del evento...
    });
  };

  return (
    <form className="event-upload-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Título del evento"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="artist"
        placeholder="Artista"
        value={formData.artist}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Ubicación"
        value={formData.location}
        onChange={handleChange}
      />
      {/* Otros campos del formulario... */}
      <button type="submit">Subir Evento</button>
    </form>
  );
};

export default EventUploadForm;
