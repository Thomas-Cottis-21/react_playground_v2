/* import React from 'react';
import ReactDOM from 'react-dom'; */
import './assets/css/Header.css';
import { Header } from './Components/Header';
import { MyLife } from './Components/MyLife';

function App() {
  return (
    <div className = "root">
      <div className = "Header">
        {<Header name = "Thomas"/>}
      </div>
    </div>
  );
}

export default App;
