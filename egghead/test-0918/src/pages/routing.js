import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./slider.css";

function Item({ match }) {
  console.log(match);
  return <div>{match.params.i}</div>;
}

function Third() {
  return (
    <div>
      <nav class="third">
        <Link to="/third/food">Food</Link>
        <Link to="/third/drink">Drink</Link>
      </nav>
      <Route
        path="/third/:item"
        render={({ match }) => <h3>{match.params.item}</h3>}
      />
    </div>
  );
}
export default function Routing({ match }) {
  return (
    <Router>
      <div>
        <ul class="submenu">
          <li>
            <Link to={`${match.url}/First`}> First </Link>
          </li>
          <li>
            <Link to={`${match.url}/Second`}> Second </Link>
          </li>
          <li>
            <Link to="/third">Third </Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${match.path}/:i`} component={Item} />
          <Route
            exact
            path={match.path}
            render={() => <h2>Select component</h2>}
          />
          <Route path="/third" component={Third} />
          <Route
            path="/:a/:c/:b(\d{2}-\d{2})"
            render={({ match }) => <h2>{match.params.b}</h2>}
          />
        </Switch>
      </div>
    </Router>
  );
}
