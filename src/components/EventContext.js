  import React, { createContext, useState, useContext } from 'react';

const EventContext = createContext();

// export const { Provider } = EventContext


const EventProvider = ({ children }) => {

  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };


  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {

  return useContext(EventContext)
};

export default EventProvider;
