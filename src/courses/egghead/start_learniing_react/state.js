import React, { Component } from 'react';
import './style.css';

export class StateLesson extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: "standart text",
            num: 0,
        }
    }

    handleOnBlur =() =>{
        this.setState({
            text:"Mouse was over: ",
            num: this.state.num +1,
        })
    }

    render() {
        return (
            <div className="lesson">
            <div className="lesson-state">
            <h3>Lesson State</h3>
                    <div>{this.state.text}</div>
                    <div onMouseOver={this.handleOnBlur}><div>{this.state.num}</div></div>
            </div>
            </div>
        );
    }
} 

export default StateLesson;

