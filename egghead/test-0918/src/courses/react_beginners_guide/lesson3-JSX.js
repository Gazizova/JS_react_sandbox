import React,{Component} from 'react'

class Lesson3 extends Component{

    props = {
        className: 'container',
        children: 'Hello!!!',
    }
    element = (
        <div{...this.props} className='override-class-name'/>
    )
    render(){
         return(
            <div className="lesson">
                <h3> Lesson 3:</h3>
                 {this.element}
             {/* <div{...this.props}/>  / почему не работает? */}
             </div>
         )
    }
}

export default Lesson3