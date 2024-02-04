import React from 'react';
import logo from './logo.svg';
import style from  './App.module.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Routers from './routes/Routers';
import NavigationContext from './contexts/NavigationContext';


function App() {
  return (
    <div className={style.App}>
      <Router>
      <NavigationContext>
      <Routers/>
      </NavigationContext>
      </Router>
    </div>
  );
}

export default App;
