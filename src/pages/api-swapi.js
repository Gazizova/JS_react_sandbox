import React, { useState, Suspense, useEffect } from "react";
import axios from "axios";
import "./slider.css";

const url = "https://swapi.co/api/planets";

export function TestSwapiHooks() {
  return (
    <React.Fragment>
      <div className="course-block">
        <SwapiHooks />
        <Swapi />
      </div>
    </React.Fragment>
  );
}

export function SwapiHooks() {
  const [planets, setPlanets] = useState([]);
  const [error, setError] = useState(false);

  function handlePlanets() {
    axios
      .get(url)
      .then(response => {
        setPlanets(response.data.results);
      })
      .catch(() => setError(true));
  }

  useEffect(() => {
    handlePlanets();
  }, []);

  return (
    <div className="lesson">
      <h3>Function</h3>
      {planets.map(item => (
        <h4 key={item.diameter}>{item.name}</h4>
      ))}
    </div>
  );
}

export class Swapi extends React.Component {
  state = {
    planets: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.fetchPlanet();
  }

  fetchPlanet = () => {
    axios
      .get(url)
      .then(response => {
        this.setState({ planets: response.data.results, loading: false });
      })
      .catch(() => this.setState({ error: true, loading: false }));
  };

  render() {
    if (this.state.loading) {
      return "loading";
    }

    if (this.state.error) {
      return "error";
    }
    let items = this.state.planets;
    return (
      <div className="lesson">
        <h3>Class</h3>
        {items.map(item => (
          <h4 key={item.diameter}>{item.name}</h4>
        ))}
      </div>
    );
  }
}
