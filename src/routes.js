import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HomeAlt } from './pages/home';
import { SliderPage } from './pages/slider-page';
import Game from './pages/Game/game-class';
import GameHooks from './pages/Game/game-hooks';
import Form from './pages/form';
import FinalProductTable from './pages/price';
import BackTo from './components/back_to';
import { TestSwapiHooks } from './pages/api-swapi';
import Api from './pages/api';
import ReactBeginnersGuide from './pages/beginners-guide';
import Routing from './pages/routing';

import Startlearningreact from './pages/startLearningReact';
import TestHook from './pages/react-app-with-react-hook';
import './routes.css';

class RouteElements extends React.Component {
  menu = document.querySelector('.menu');

  boldFont = e => {
    if (e.target.tagName === 'A') {
      e.target.style.fontWeight = 'bold';
    }
  };

  lightFont = function(e) {
    if (e.target.tagName === 'A') {
      e.target.style.fontWeight = '';
    }
  };

  toggleInnerMenu = function(e) {
    var list = e.target.parentNode.children;
    if (list.length) {
      for (let items of list) {
        if (items.tagName === 'UL') {
          items.classList.toggle('hidden');
          items.parentNode.firstElementChild.classList.toggle('open');
        }
      }
    }
  };

  render() {
    return (
      <Router>
        <div>
          <BackTo title="Back" to="/" />
          <div className="main-block">
            <ul
              className="menu"
              onMouseOver={e => this.boldFont(e)}
              onMouseOut={e => this.lightFont(e)}
              onClick={e => this.toggleInnerMenu(e)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/slider">Slider</Link>
              </li>
              <li>
                <a href="#" className="sub-menu-header ">
                  Game
                </a>
                <ul className="sub-menu hidden">
                  <li>
                    <Link to="/game-class">Game class</Link>
                  </li>
                  <li>
                    <Link to="/game-hooks">Game hooks</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/price">Pricing</Link>
              </li>
              <li>
                <a href="#" className="sub-menu-header">
                  Courses
                </a>
                <ul className="sub-menu hidden">
                  <li>
                    <Link to="/courses/beginners-guide">beginners guide</Link>
                  </li>
                  <li>
                    <Link to="/courses/start-learn-react">start-learn-react</Link>
                  </li>
                  <li>
                    <Link to="/courses/react-app-with-react-hook">test-react-hook</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/routing">Routing</Link>
              </li>
              <li>
                <a href="#" className="sub-menu-header">
                  API
                </a>
                <ul className="sub-menu hidden">
                  <li>
                    <Link to="/api-map">Api France addresses</Link>
                  </li>
                  <li>
                    <Link to="/api-swapi">Api Star Wars</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="component">
              <Route exact path="/" component={HomeAlt} />
              <Route path="/slider" component={SliderPage} />
              <Route path="/game-class" component={Game} />
              <Route path="/game-hooks" component={GameHooks} />
              <Route path="/form" component={Form} />
              <Route path="/price" component={FinalProductTable} />
              <Route path="/courses/beginners-guide" component={ReactBeginnersGuide} />
              <Route path="/courses/start-learn-react" component={Startlearningreact} />
              <Route path="/courses/react-app-with-react-hook" component={TestHook} />
              <Route path="/routing" component={Routing} />
              <Route path="/api-map" component={Api} />
              <Route path="/api-swapi" component={TestSwapiHooks} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default RouteElements;
