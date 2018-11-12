import React,{Component} from 'react'


class Lesson9 extends Component {
    constructor(props) {
        super(props);
        this.state = {eventCount: this.props.start, username: ''};

    }

    increment = () => {
        this.setState({eventCount: this.state.eventCount +1 })
    }
    updateUsername = (event) => {
        this.setState({username: event.target.value})
        console.log({target: event.target})
    }

    onSubmitHandle =(event) => {
        event.preventDefault();
        console.log(event.target.method)
    }

    render() {
        return (
            <div className="lesson">
            <h3> Lesson 9:</h3>
              <div>there have been {this.state.eventCount} events</div>
                <p>
                    <button onClick={this.increment}>&#9829;</button>
                </p>
                <p>
                    You typed: {this.state.username}
                </p>
                <div>
                    <form onSubmit={this.onSubmitHandle}>
                    <input onChange={this.updateUsername}/>
                    </form>
                    
                </div>
            </div>
        );
    }
}

export default Lesson9
