import React,{Component} from 'react'

class Lesson7tick extends Component {
    constructor(props){
        super(props);
        const time = new Date().toLocaleTimeString()
        this.state = {currentCount: time}
    }
    // timer() {
    //     this.setState({
    //         currentCount: this.state.currentCount - 1
    //     })
    //     if(this.state.currentCount < 1) {
    //         clearInterval(this.intervalId);
    //     }
    // }
    componentDidMount() {
        this.intervalId = setInterval(this.state.currentCount, 1000);
    }
    // componentWillUnmount(){
    //     clearInterval(this.intervalId);
    // }
    render() {
        return(
            <div>{intervalId}</div>
        );
    }
}

//
// class Lesson7 extends Component{
// tick() {
//     const time = new Date().toLocaleTimeString()
//     return time
//
// }
//
//     render(){
//          return(
//              <div>
//                  It is
//                  <input value={this.tick()}/>
//                  {/*<input value={time}/>*/}
//              </div>
//
//             // setInterval(this.tick(), 1000)
//          )
//     }
// }

export default Lesson7tick