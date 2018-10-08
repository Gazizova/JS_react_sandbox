import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import createBrowserHistory from 'history/createBrowserHistory'
import HomeAlt from './pages/home'
import VolumeSlider from './components/slider'
// import App from "./App";
import BackTo from './components/back_to'

class RouteElements extends React.Component {
   render(){
       return(
        <Router>
        <div>
            <BackTo title="Back" to="/"/> 
            <ul className="menu">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/slider">Slider</Link></li>  

            </ul>  
            <div className="component">
                <Route exact path="/home" component={HomeAlt}/>
                <Route exact path="/slider" component={VolumeSlider}/>
            </div>
        </div>
      </Router>
      ) 
   } 
  
}

export default RouteElements;