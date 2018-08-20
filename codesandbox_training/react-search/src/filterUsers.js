import React, { Component } from 'react';
import './App.css';
import clientList from "./data.json";


export default function FilterUserList(searchText) {
    return clientList.filter(i => {
            if (i.name.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }

            return false;
        })
        .slice(0);
}