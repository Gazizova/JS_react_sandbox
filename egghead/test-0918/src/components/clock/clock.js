import React from 'react'

export class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
            });
    }

    render(){
        return(
            <div className='clock-component'>
                <h4>{this.state.date.toLocaleString('ua')}</h4>
            </div>
        );
    }
}