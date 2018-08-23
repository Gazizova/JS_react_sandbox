import React, { Component } from 'react';
import './App.css';
import clientList from "./data.json";


export default function FilterUserList(array, searchText) {
    return array.filter(i => {
            if (i.name.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }

            return false;
        })
        .slice(0);
}


class FilterUsersLists extends Component {


    FilterUserList(array, searchText) {
        return array.filter(i => {
            if (i.name.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }

            return false;
        })
            .slice(0);

    }

    render(){
        FilterUserList({this.props.array})

    }
}