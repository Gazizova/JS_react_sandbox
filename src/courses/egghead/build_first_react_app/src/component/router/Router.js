import React, { Component, createContext } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

const getCurrentPath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf("/"));
};
export class Router extends Component {
  state = {
    route: getCurrentPath()
  };

  handleLinkClick = route => {
    this.setState({ route });
    window.history.pushState(null, "", route);
  };

  componentDidMount = () => {
    window.onpopstate = () => {
      this.setState({ route: getCurrentPath() });
    };
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ route: this.state.route, linkHandler: this.handleLinkClick }}
      >
        <div>{this.props.children}</div>
      </ThemeContext.Provider>
    );
  }
}
