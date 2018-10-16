import React from "react";
import  Board  from '../components/game/board' 

class Game extends React.Component{
    debugger
    render(){
        return(
            <div className='game'>
                <div className='game-board'>
                    <Board/>
                </div>
            </div>
        )
    }

}
export default Game