import React,{Component} from 'react'


class Lesson7tick extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date().toLocaleTimeString()};
    }

    componentDidMount() {
        setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    onChange =(e) =>{
        e.preventDefault();
    }

    tick() {
        this.setState({
            date: new Date().toLocaleTimeString()
        });
    }

    tick2() {
        const time = new Date().toLocaleTimeString()
        const element = <div>
            It is
            <input value={time} onChange={this.onChange}/>
            <input value={time} onChange={this.onChange}/>
        </div>
        return element
        // ReactDOM.render(element, rootElement)
    }


    render() {
        return (
            <div>
                <h3> Lesson 7:</h3>
                <h2>It is {this.state.date}</h2>
                <div>{this.tick2()}</div>
            </div>
        );
    }
}

export default Lesson7tick
