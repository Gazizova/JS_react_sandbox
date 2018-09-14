import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Link extends Component{
    static contextTypes = {
        route: PropTypes.string, 
        linkHandler: PropTypes.func
    }

    handleClick = (evt) => {
        evt.preventDefault()
        window.history.pushState(null, '', this.props.to)
    }

    render(){
        return <a href="#" onClick={this.handleClick}>{this.props.children}</a>
    }
}