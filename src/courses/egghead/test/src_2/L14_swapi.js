import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class L14_swapi extends React.Component {
    constructor(){
        super();
        this.state = {items: []}
    }
    UNSAFE_componentWillMount(){
        fetch( 'https://swapi.co/api/people/?format=json' )
            .then( response => response.json() )
            .then( ({results: items}) => this.setState({items}))
       }
    // filter(e){
    //     this.setState({filter: e.target.value})
    // }
    render(){
        let items = this.state.items;
        console.log("array")
        console.log( items )

        // if(this.state.filter){
        //     items = items.filter( item =>
        //         item.name.toLowerCase()
        //             .includes(this.state.filter.toLowerCase()))
        // }
        // if(this.state.filter){
        //     items = items.filter( item =>
        //         item.height.toLowerCase()
        //             .includes(this.state_h.filter.toLowerCase()))
        // }
        return (
            <div>
                {items.map(item =>
                <Person person={item} />)}

                {items.map(item =>
                    <SkinColor person={item} />
                )}
            </div>
        )
    }
}
//
const Person = (props) => <h4>{props.person.name}</h4>
const SkinColor = (props) => <h4>{props.person.skin_color}</h4>

export default L14_swapi