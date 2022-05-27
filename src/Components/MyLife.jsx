import React from 'react';
export class MyLife extends React.Component {
    myLifeList = ["Traveling", "Programming", "Studying", "Working", "Playing", "Relaxing", "Exploring", "Loving"];
    render() {
        return (
            <div id="myLife">
                <div className = "my-life-header">
                    <h1>This is my life: </h1>
                </div>
                <ul>
                    <li>{this.myLifeList[0]}</li>
                    <li>{this.myLifeList[1]}</li>
                    <li>{this.myLifeList[2]}</li>
                    <li>{this.myLifeList[3]}</li>
                    <li>{this.myLifeList[4]}</li>
                    <li>{this.myLifeList[5]}</li>
                </ul>
            </div>
        )
    }
}