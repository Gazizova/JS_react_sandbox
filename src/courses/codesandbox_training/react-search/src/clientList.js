import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import clientList from "./data.json";
import App from "./App";
import ReactDOM  from 'react';


// console.log(clientList[1])

function RenderUsersList() {
    return (
        <div className="user-list">
            {
                clientList.map(i => {
                return <p><img src={require(`./images/${i.image}.svg`)} height="40"/> {i.name + '   age:' + i.age} </p>
            })
            }
        </div>
    )
}

export default RenderUsersList;