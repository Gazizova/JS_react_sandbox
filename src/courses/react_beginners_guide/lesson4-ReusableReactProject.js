import React,{Component} from 'react'

class Lesson4 extends Component{

     Message =(props)=> (
       <div>{props.msg}</div>
)
    render(){
         return(
             <div className="lesson Lesson4">
                <h3> Lesson 4:</h3>
                 <this.Message msg="Im Message!" />
                 <this.Message msg="Im 2-nd Message!" />
             </div>
         )
    }
}

export default Lesson4