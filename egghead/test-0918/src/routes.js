import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomeAlt } from "./pages/home";
import { SliderPage } from "./pages/slider-page";
import Game from "./pages/game";
import Form from "./pages/form";
import FinalProductTable from "./pages/price";
import BackTo from "./components/back_to";
import ReactBeginnersGuide from './pages/beginners-guide'

class RouteElements extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <BackTo title="Back" to="/" />
          <div className="main-block">
            <ul className="menu">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/slider">Slider</Link>
              </li>
              <li>
                <Link to="/game">Game</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/price">Pricing</Link>
              </li>
              <li>
                <Link to="/courses">courses: beginners guide</Link>
              </li>
            </ul>
            <div className="component">
              <Route exact path="/home" component={HomeAlt} />
              <Route path="/slider" component={SliderPage} />
              <Route path="/game" component={Game} />
              <Route path="/form" component={Form} />
              <Route path="/price" component={FinalProductTable} />
              <Route path="/courses" component={ReactBeginnersGuide} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default RouteElements;
