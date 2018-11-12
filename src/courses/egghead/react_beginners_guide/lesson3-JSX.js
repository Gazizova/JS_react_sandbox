import React,{Component} from 'react'

class Lesson3 extends Component {
    
    static defaultProps = {
        children: "123"
    }

    element = (
        <div {...this.props} className='override-class-name'/>
    )

    render() {

        // return <div {...this.props} />
        
         return(
            <div className="lesson 3">
                 <h3> Lesson 3:</h3>
                 {/* {this.element} */}
                 <div {...this.props} />
            </div>
         )
    }
}

// new Lesson3().props 

export default Lesson3