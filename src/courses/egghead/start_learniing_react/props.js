import React from 'react'
import PropTypes from 'prop-types';

export class TestProps extends React.Component{
    static propTypes ={
        text: PropTypes.string,
        num: PropTypes.number,
    }
    
    static defaultProps={
        text: "This is default text",
    }
    render(){
        return(
            <div className="lesson">
                 <h3> Lesson props:</h3>
                 <div>String: {this.props.text}</div> 
                 <div>Number: {this.props.num}</div> 
             </div>
        )
    }

}