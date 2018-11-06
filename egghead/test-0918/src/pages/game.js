import React, {Fragment} from "react";
import  Board  from '../components/game/board' 
import { Clock } from "../components/clock/clock";

class Game extends React.Component{
    debugger;
    constructor(props){
        super(props)
        this.state= {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext:true,
            setStep:0,
        };
    }

    handleClick(i){
        debugger;
        const history = this.state.history;
        const current = history[history.length-1];
        const squares = current.squares.slice();
        if(this.determineWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext:!this.state.xIsNext,
            setStep: this.state.setStep + 1,
        });
    }
    
    determineWinner=(squares)=>{
        squares=this.props;
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
        for(let i =0; i< lines.length; i++){
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }
        return null;
    };

    gameStep=(step)=>{
        debugger
        return(
            this.state.history.map(<li>{this.props.step}</li>)     
        )
    };

    render(){
        const winner = this.determineWinner(this.props.squares);
        let status;
        const current = this.state.history[this.state.history.length -1];
        if(winner){
            status = "Winner: " + winner
        }else{
            status = 'Next player: ' + (this.state.xIsNext? "X" : "O");
        }
        return(
            <div className='game'>
                <Clock/>
                <div className='game-board'>
                    <Board 
                        squares={current.squares} 
                        onClick ={(i) => this.handleClick(i)}
                        />
                </div>
                <div className='game-info'>
                    <div>{status}</div>
                    <ol>{this.gameStep(this.state.setStep)}</ol>
                </div>
            </div>
        )
    }

}
export default Game