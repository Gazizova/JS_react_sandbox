import React, { Component } from "react";
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

export default class Home extends Component {
    componentDidMount() {
        browserHistory.push('/');
    }
    render() {
        return (
            <div id="home">
                <h2>This is the home page.</h2>
                <div>
                    <Link to="/v1">Sing in form with field validation</Link>
                </div>
            </div>
        );
    }
}