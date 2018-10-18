import React from "react";
import  Board  from '../components/game/board' 
import { Clock } from "../components/clock/clock";

class Game extends React.Component{
    debugger
    render(){
        return(
            <div className='game'>
                <Clock/>
                <div className='game-board'>
                    <Board/>
                </div>
            </div>
        )
    }

}
export default Game