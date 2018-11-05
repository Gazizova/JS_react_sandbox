import React,{Component} from 'react'

class Lesson6 extends Component{

    render(){
         return(
             <div className="lesson">
                 <h3> Lesson 6:</h3>
                 {this.props.message? (
                     <div>{this.props.message}</div>
                 ):(
                     <div>No message</div>
                 )}
             </div>
         )
    }
}

export default Lesson6