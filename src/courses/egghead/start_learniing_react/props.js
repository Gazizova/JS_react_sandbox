import React from 'react'
import PropTypes from 'prop-types';

export class TestProps extends React.Component{
    static propTypes ={
        text: PropTypes.string,
        num: PropTypes.number,
        validatedText(props, propsName){
            if (!(propsName in props)){
                return new Error(`missing props in component TestProps: ${propsName}`)
            }
            if(props[propsName].length < 6){
                return new Error (`${propsName} is too short`)
            }
        }
    }
    
    static defaultProps={
        text: "This is default text",
    }

    render(){
        return(
            <div className="lesson">
                 <h3> Lesson props and props validation:</h3>
                 <div>String: {this.props.text}</div> 
                 <div>String with validated props: {this.props.validatedText}</div> 
                 <div>Number: {this.props.num}</div> 
             </div>
        )
    }

}
