import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./slider.css";

function Item({ match }) {
  console.log(match);
  return <div className="Item">{ match.params.id }</div>;
}

function Third({ match }) {
  console.log(match);
  return (
    <div>
      <nav className="third">
        <Link to={`${match.url}/food`}>Food</Link>
        <Link to={`${match.url}/drink`}>Drink</Link>
      </nav>
      <Route
        path={`${match.path}/:item`}
        render={({ match }) => <h3>{match.params.item}</h3>}
      />
    </div>
  );
}
export default function Routing({ match }) {
  return (
      <div>
        <ul className="submenu">
          <li>
            <Link to={`${match.url}/first`}> First </Link>
          </li>
          <li>
            <Link to={`${match.url}/Second`}> Second </Link>
          </li>
          <li>
            <Link to={`${match.url}/third`}>Third </Link>
          </li>
        </ul>
        {/* <Switch> */}
          <Route path={`${match.path}/:id`} component={Item} />
          <Route
            exact path={match.path}
            render={() => <h2>Select component</h2>}
          />
          <Route path={`${match.path}/third`} component={Third} />
          <Route
            path="/:a/:c/:b(\d{2}-\d{2})"
            render={({ match }) => <h2>{match.params.b}</h2>}
          />
        {/* </Switch> */}
      </div>

  );
}
