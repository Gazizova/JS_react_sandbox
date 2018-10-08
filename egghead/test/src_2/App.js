import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import { Router, Route, IndexRoute } from 'react-router';
import Form from './pages/valedated-input';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
