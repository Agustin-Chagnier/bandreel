import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import EventCalendar from './components/EventCalendar';
// import EventCarousel from './components/EventCarousel';
import Home from './components/Home';
// import Search from './Search';
// import Calendar from './Calendar';
// import Recommendations from './Recommendations';
// import UserProfile from './UserProfile';
// import NotFound from './NotFound';

const App = () => {

  const links = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Buscar', href: '/buscar' },
    { id: 3, name: 'Calendario', href: '/calendario' },
    { id: 4, name: 'Recomendaciones', href: '/recomendaciones' },
    { id: 5, name: 'Perfil', href: '/perfil' },
  ];



  return (
    
    
    <BrowserRouter>
        <NavBar links={links}/>
      
        <Routes>
          <Route exact path="/" component={Home} /> 
          {/* <Route path="/buscar" component={Search} /> */}
          <Route path="./components/calendario" component={EventCalendar} />
          {/* <Route path="/recomendaciones" component={Recommendations} />
          <Route path="/perfil" component={UserProfile} />
          <Route component={NotFound} /> */}
        </Routes>
      

    </BrowserRouter>
    
  );
};

export default App;
