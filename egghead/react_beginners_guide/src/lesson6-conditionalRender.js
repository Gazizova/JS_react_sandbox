import React,{Component} from 'react'

class Lesson6 extends Component{

    render(){
         return(
             <div>
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