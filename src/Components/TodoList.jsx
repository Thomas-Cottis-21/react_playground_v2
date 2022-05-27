import React from 'react';

export const TodoList = () => {
    return (
    <section id='todo'>
        <h1>This is my to do list</h1>
        <input type="text" name="inputFromTodo"/>
        <button>Add a To-do</button>
        <button>Remove a To-do</button>
        <button>Submit</button>
        <p></p>
    </section>
    );
}
