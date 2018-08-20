import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import clientList from "./data.json";
import App from "./App";
import ReactDOM  from 'react';




function FilterEmoji() {
    return (
        clientList.forEach(i => {
            document.write(i.name)
        })
    )
}
class RenderClientList extends Component {

            render(){
                return(
                    <div className = "list">
                        <FilterEmoji />
                    </div>
                )
            }
}

export default RenderClientList;