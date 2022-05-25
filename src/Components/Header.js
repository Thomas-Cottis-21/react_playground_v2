/* import React from 'react'; */
import React, { useState } from 'react';

export const Header = (props) => {

    const myTopics = ["my Life", "my Workflow"];

    return (
        <div id="header">
            <div className = "header-header">
                <h3>Hey! My name is {props.name} and this is my React playground!</h3>
                <h5>Welcome to, {myTopics[1]}</h5>
                <button>Let's go!</button>
            </div>
        </div>
    );
}
