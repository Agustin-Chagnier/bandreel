import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
// import EventCarousel from './components/EventCarousel';
// import Home from './Home';
// import Search from './Search';
// import Calendar from './Calendar';
// import Recommendations from './Recommendations';
// import UserProfile from './UserProfile';
// import NotFound from './NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/buscar" component={Search} />
          <Route path="/calendario" component={Calendar} />
          <Route path="/recomendaciones" component={Recommendations} />
          <Route path="/perfil" component={UserProfile} />
          <Route component={NotFound} />
        </Switch> */}
      </div>

    </BrowserRouter>
  );
};

export default App;
