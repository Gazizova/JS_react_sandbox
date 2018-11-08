import React, { PureComponent } from 'react';
import './App.css';
import clientList from "./data.json";
import UsersResults2ndSample from './usersResults2ndSample'
import FilterUserList from "./filterUsers";
// import sortMultidimensionalArrayFunc from 'sort-multidimensional-array-func';

//

function sortByName2(cnt, array){
        let newArray =array.slice();
        let sortByFirstName = newArray.sort(function (a, b) {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();
            if (cnt===0) {
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }else if(cnt === 1){
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                return 0;
            }
        });
        return sortByFirstName
        console.log("sortByFirstName")
        console.log(sortByFirstName)
    }
export default sortByName2