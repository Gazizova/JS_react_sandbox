import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomeAlt } from './pages/home'
import { SliderPage } from './pages/slider-page'
import  Game  from './pages/game'

import BackTo from './components/back_to'

class RouteElements extends React.Component {
   render(){
       return(
        <Router>
        <div >    
        <BackTo title="Back" to="/"/> 
        <div className='main-block'>
            
            <ul className="menu">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/slider">Slider</Link></li>  
                <li><Link to="/game">Game</Link></li>  

            </ul>  
            <div className="component">
                <Route exact path="/home" component={HomeAlt}/>
                <Route path="/slider" component={SliderPage}/>
                <Route path="/game" component={Game}/>
            </div>
        </div>
        </div>
      </Router>
      ) 
   } 
  
}

export default RouteElements;