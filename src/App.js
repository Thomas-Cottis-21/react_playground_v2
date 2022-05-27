/* import React from 'react';
import ReactDOM from 'react-dom'; */
import './assets/css/Header.css';
import './assets/css/counter.css';
import './assets/css/todolist.css';
import { Header } from './Components/Header';
/* import { MyLife } from './Components/MyLife'; */
import { Counter } from './Components/Counter';
import { Todo } from './Components/TodoList';

function App() {
  return (
    <div className = "root">
      <div className = "Header">
        {<Header name = "Thomas"/>}
      </div>
      <div>
        {<Counter />}
      </div>
      <div>
        {<Todo />}
      </div>
    </div>
  );
}

export default App;
