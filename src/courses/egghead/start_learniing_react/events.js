import React, { Component } from 'react';
import './style.css';

export class EventLesson extends Component {
    constructor(){
        super()
        this.state = {
            currentEvent: "...waiting for event"
        }
    }

    updateEvent =(event) =>{
        this.setState({
            currentEvent: event.type
        })
    }

    render() {
        return (
            <div className="lesson">
            <div className="lesson-state">
            <h3>Lesson Event</h3>
                    <textarea
                    onMouseOver={this.updateEvent}
                    onCut={this.updateEvent}
                    onCopy={this.updateEvent}
                    onPaste={this.updateEvent}
                    onFocus={this.updateEvent}
                    onBlur={this.updateEvent}
                    onDoubleClick={this.updateEvent}
                    onTouchStart={this.updateEvent}
                    onTouchMove={this.updateEvent}
                    onTouchEnd={this.updateEvent}
                    // onInput={this.updateEvent}
                    cols="20"
                    rows="5"/>
                    <h4>{this.state.currentEvent}</h4>
            </div>
            </div>
        );
    }
} 

export default EventLesson;

