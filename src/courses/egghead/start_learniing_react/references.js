import React from 'react'

export class TestRefs extends React.Component{
    constructor(){
        super();
        this.state={
             a: ''
            }
    }
  
    update=()=>{
        this.setState({
            a: this.refs.a.value,
            b: this.refs.b.value
        })
    }
    render(){
        return(
            <div className="lesson">
                 <h3> Lesson refs:</h3>
                 <input 
                   ref="a"
                   type="text"
                   onChange={this.update}/>
                   <p>{this.state.a}</p>
                   <hr/>
                   <input 
                   ref="b"
                   type="text"
                   onChange={this.update}/>
                   <p>{this.state.b}</p>  

             </div>
        )
    }

}

class Input extends React.Component{
    render(){
        return(
            <input 
            refs="a"
            type="text"
            onChange={this.props.update}/>
        )
    }
}