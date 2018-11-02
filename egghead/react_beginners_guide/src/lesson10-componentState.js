import React,{Component} from 'react'

class Lesson10 extends Component {

    state = {lapse:0, running: false}

     buttonStyles = {
            border: '1px solid #ccc',
            background: '#fff',
            fontSize: '1.5em',
            padding: 5,
            margin: 5,
            width: 100,
        }
    componentWillUnmount(){
        clearInterval(this.timer)
    }


    handleRunClick = function(){
            this.setState( () =>{
                if(this.state.running){
                  clearInterval(this.timer)

            } else{
                    const startTime = Date.now() - this.state.lapse;
                    this.timer = setInterval(()=>{
                        this.setState({
                            lapse:Date.now()- startTime,
                        })
                    })
            }
            return {running: !this.state.running}
            })
        }



    handleClearClick =()=>{
        clearInterval(this.timer)
        this.setState({lapse:0, running: false})
    }
    render(){
         const {lapse, running} = this.state
        return (
            <div>
                <h3> Lesson 10:</h3>
                <div style={{textAlign: 'center'}}>
                    <label
                        style={{
                        fontSize: '2em',
                        display: 'block',
                    }}
                        >
                        {lapse}
                        ms
                    </label>

                    <button
                        onClick={this.handleRunClick.bind(this)}
                            style={this.buttonStyles}
                    >
                        {running ? 'Stop' : 'Start'}
                    </button>

                    <button
                        onClick={this.handleClearClick}
                            style={this.buttonStyles}
                    >
                        Clear
                    </button>
                </div>
            </div>
        );
    }
}

export default Lesson10
