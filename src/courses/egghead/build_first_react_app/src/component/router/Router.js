import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const getCurrentPath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf('/'));
};
export class Router extends Component {
  state = {
    route: getCurrentPath()
  };

  handleLinkClick = route => {
    this.setState({ route });
    window.history.pushState(null, '', route);
  };

  context = {
    route: this.state.route,
    linkHandler: this.handleLinkClick
  };

  static childContextTypes = {
    route: PropTypes.string,
    linkHandler: PropTypes.func
  };

  // define a method that'll actually get these values out of our component
  getChildContext() {
    return {
      route: this.state.route,
      linkHandler: this.handleLinkClick
    };
  }

  render() {
    return (
      // <ThemeContext.Provider value={this.context}>
      <div>{this.props.children}</div>
      // </ThemeContext.Provider>
    );
  }
}
