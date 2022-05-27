/* import React from 'react';
import ReactDOM from 'react-dom'; */
import './assets/css/Header.css';
import './assets/css/todo.css';
import { Header } from './Components/Header';
/* import { MyLife } from './Components/MyLife'; */
import { TodoList } from './Components/TodoList';

function App() {
  return (
    <div className = "root">
      <div className = "Header">
        {<Header name = "Thomas"/>}
      </div>
      <div>
        {<TodoList />}
      </div>
    </div>
  );
}

export default App;
