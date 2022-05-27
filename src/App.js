/* import React from 'react';
import ReactDOM from 'react-dom'; */
import './assets/css/Header.css';
import './assets/css/counter.css';
import { Header } from './Components/Header';
/* import { MyLife } from './Components/MyLife'; */
import { Counter } from './Components/Counter';

function App() {
  return (
    <div className = "root">
      <div className = "Header">
        {<Header name = "Thomas"/>}
      </div>
      <div>
        {<Counter />}
      </div>
    </div>
  );
}

export default App;
