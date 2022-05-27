import React, {useState} from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('some color');

    const addOne = () => {
        setCount(prevCount => prevCount + 1)
    }

    const subOne = () => {
        setCount(count - 1)
    }

    const addTwo = () => {
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
    }

    const addTwoOld = () => {
        setCount(count + 1);
        setCount(count + 1);
    }

    const subtractTwo = () => {
        setCount((prevCount) => prevCount - 2)
    }

    const reset = () => {
        setCount(prevCount => prevCount - count)
        setTheme('some color')
    }

    const newThemeToBlue = () => {
        setTheme(prevTheme => prevTheme = 'blue')
    }
    return (
    <section id='counter'>
        <h1>This is my to do list</h1>
        {/* <input type="text"/> */}
        <p>Your current count is {count}</p>
        <p>Your current theme is {theme}</p>
        <div className='counterButtonGroup'>
            <button onClick={addOne}>Add 1</button>
            <button onClick={subOne}>Subtract 1</button>
            <button onClick={addTwo}>Add 2</button>
            <button onClick={addTwoOld}>Add 2 the old way</button>
            <button onClick={subtractTwo}>Subtract 2</button>
            <button onClick={reset}>reset</button>
            <button onClick={newThemeToBlue}>Make Blue</button>
        </div>
        
    </section>
    );
}
