import React from 'react';

export class Header extends React.Component {

    name = "Thomas";
    myTopics = ["my Workspace", "my Life", "my Routine", "my Travels"];

    render() {
        return (
            <div id="header">
                <div className = "header-header">
                    <h3>Hey! My name is {this.name} and this is my React playground!</h3>
                    <h5>Welcome to, {this.myTopics[3]}</h5>
                    <button>Let's go!</button>
                </div>
            </div>
        )
    }
}
