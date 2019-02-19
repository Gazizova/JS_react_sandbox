import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './Router';

export class Link extends Component {
  static contextType = ThemeContext;
  // static contextTypes = {
  //   route: PropTypes.string,
  //   linkHandler: PropTypes.func
  // };

  handleClick = evt => {
    evt.preventDefault();
    debugger;
    this.context.linkHandler(this.props.to);
  };

  render() {
    const activeClass = this.context.route === this.props.to ? 'active' : '';
    return (
      <a href="#" className={activeClass} onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
};
