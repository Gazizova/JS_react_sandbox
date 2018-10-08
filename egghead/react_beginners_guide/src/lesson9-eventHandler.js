import React,{Component} from 'react'


class Lesson9 extends Component {
    constructor(props) {
        super(props);
        this.state = {eventCount: this.props.start, username: ''};
    }
    // setFirstState(){
    //     this.setState=() => {eventCount:this.state.eventCount =0}
    // }

    increment(){
        this.setState({eventCount: this.state.eventCount +1 })
    }
    updateUsername(event){
        this.setState({username: event.target.value})
    }


    render() {
        return (
            <div>
            <h3> Lesson 9:</h3>
              <div>there have been {this.state.eventCount} events</div>
                <p>
                    <button onClick={this.increment.bind(this)}>&#9829;</button>
                </p>
                <p>
                    You typed: {this.state.username}
                </p>
                <p>
                    <input onChange={this.updateUsername.bind(this)}/>
                </p>
            </div>
        );
    }
}

export default Lesson9
