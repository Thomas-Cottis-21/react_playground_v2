/* import React from 'react'; */
import React, { useState } from 'react';

export const Header = (props) => {
    const [display, setDisplay] = useState(true);

    const myTopics = ["Life", "Workflow"];

    return (
        <div id="header">
            <div className = "header-header">
                <h3>Hey! My name is {props.name} and this is my React playground!</h3>
                <h5>Welcome to my {myTopics[1]}</h5>
                <button onClick={() => setDisplay(!display)}>Let's go!</button>
                {display ? <h3>true</h3> : <h3>false</h3>}
            </div>
        </div>
    );
}
