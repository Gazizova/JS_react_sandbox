import {TestProps} from '../courses/egghead/start_learniing_react/props'
import React, { Component } from 'react';

class Startlearningreact extends Component {
    render() {
        return (
            <div className="course-block">
            <TestProps num={345}/>
            </div>
        );
    }
}

export default Startlearningreact;