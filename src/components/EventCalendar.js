import React from 'react';

const EventCalendar = () => {
  // Aquí suponemos que tienes una lista de eventos
  // La lista puede ser obtenida desde una API o pasada como prop
  const events = [
    {
      id: 1,
      title: 'Concierto de Rock',
      date: '2023-07-25',
      location: 'Teatro Local',
      imageURL: 'url_del_flyer_1.jpg',
    },
    {
      id: 2,
      title: 'Festival de Jazz',
      date: '2023-08-10',
      location: 'Plaza Principal',
      imageURL: 'url_del_flyer_2.jpg',
    },
    // Agrega más eventos aquí
  ];

  // Función para formatear la fecha en formato "Día de la semana, DD/MM/YYYY"
  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric' };
    return new Date(date).toLocaleDateString('es-ES', options);
  };

  return (
    <div className="event-calendar">
      <h2>Calendario de Eventos</h2>
      {events.map((event) => (
        <div key={event.id} className="event-card">
          <img src={event.imageURL} alt={event.title} />
          <div className="event-info">
            <h3>{event.title}</h3>
            <p>{formatDate(event.date)}</p>
            <p>{event.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCalendar;
