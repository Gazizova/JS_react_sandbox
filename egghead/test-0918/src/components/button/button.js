import React from 'react'

export default class Button extends React.Component{
    static defaultProps={
     isLink: false,
     isCondition: false,
    }
    render(){
        return(
            <button className="button" onClick={()=>this.props.onClick()}>
              {this.props.value}
            </button>
        )
    }
}
