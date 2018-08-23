import React,{Component} from 'react'

class Lesson4 extends Component{

     Message =(props)=> (
       <div>{props.msg}</div>
)
    render(){
         return(
             <div className="Lesson4">
                 <this.Message msg="Im Message!" />
                 <this.Message msg="Im 2-nd Message!" />
             </div>
         )
    }
}

export default Lesson4