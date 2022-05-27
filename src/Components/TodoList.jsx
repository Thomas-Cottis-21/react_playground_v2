import React, { useState } from 'react'

export const Todo = () => {
    const [ newTask, setNewTask ] = useState([]);

    const handleChange = ({ target }) => {
        setNewTask(target.value);
        console.log(newTask);
    };

    const [ allTasks, setAllTasks ] = useState([]);

    const handleSubmit = () => {
        setAllTasks(prevTasks => [newTask, ...prevTasks]);
        setNewTask([]);
    };

    return (
    <section id='todo-list'>
        <h1>These are my things to do!</h1>
        <input name='task' onChange={handleChange}/>
        <button onClick={handleSubmit}>Add task</button>
        <button>Delete task</button>
        <h3>This is the new task: </h3>
        <h3>{newTask}</h3>
        <hr/>
        <h3>{allTasks.map((task) => {
            return <li>{task}</li>
        })}</h3>
    </section>
    )
}
