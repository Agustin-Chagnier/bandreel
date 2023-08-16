import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import EventCalendar from './components/EventCalendar';
import Home from './components/Home';
import Search from './components/Search';
import Recommendations from './components/Recommendations';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';
import EventProvider from './components/EventContext';
import { UserProvider } from './components/UserContext';
import Login from './components/Login';
import SignUp from './components/SignUp';



const App = () => {

  const links = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Buscar', href: '/buscar' },
    { id: 3, name: 'Calendario', href: '/calendario' },
    { id: 4, name: 'Recomendaciones', href: '/recomendaciones' },
    { id: 5, name: 'Perfil', href: '/perfil' },
    { id: 6, name: 'Iniciar sesión', href: '/login' },
    { id: 7, name: 'Registrarse', href: '/signup' },
  ];



  return (
<UserProvider>
<EventProvider>
    <BrowserRouter>
        <NavBar links={links}/>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/buscar" element={<Search />} />
          <Route path="/calendario" element={<EventCalendar />} />
          <Route path="/recomendaciones" element={<Recommendations />} />
          <Route path="/perfil" element={<UserProfile />} />
          <Route element={<NotFound />} />
        </Routes>


    </BrowserRouter>
</EventProvider>
</UserProvider>

  );
};

export default App;
