import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomeAlt } from "./pages/home";
import { SliderPage } from "./pages/slider-page";
import Game from "./pages/game";
import Form from "./pages/form";
import FinalProductTable from "./pages/price";
import BackTo from "./components/back_to";
import ReactBeginnersGuide from "./pages/beginners-guide";
import Routing from "./pages/routing";
import Startlearningreact from './pages/startLearningReact';

class RouteElements extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <BackTo title="Back" to="/" />
          <div className="main-block">
            <ul className="menu">
              <li> <Link to="/home">Home</Link></li>
              <li> <Link to="/slider">Slider</Link></li>
              <li> <Link to="/game">Game</Link></li>
              <li> <Link to="/form">Form</Link></li>
              <li> <Link to="/price">Pricing</Link></li>
              <li> Courses
                  <ul className="multilevel">
                  <li> <Link to="/courses/beginners-guide">beginners guide</Link></li>
                  <li> <Link to="/courses/start-learn-react">start-learn-react</Link></li>
                  </ul>
              </li>    
              <li>
                <Link to="/routing">Routing</Link>
              </li>
            </ul>
            <div className="component">
              <Route exact path="/home" component={HomeAlt} />
              <Route path="/slider" component={SliderPage} />
              <Route path="/game" component={Game} />
              <Route path="/form" component={Form} />
              <Route path="/price" component={FinalProductTable} />
              <Route path="/courses/beginners-guide" component={ReactBeginnersGuide} />
              <Route path="/courses/start-learn-react" component={Startlearningreact} />
              <Route path="/routing" component={Routing} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default RouteElements;
