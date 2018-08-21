import React, { PureComponent } from 'react';
import './App.css';
import clientList from "./data.json";
import UsersResults2ndSample from './usersResults2ndSample'
import FilterUserList from "./filterUsers";
// import sortMultidimensionalArrayFunc from 'sort-multidimensional-array-func';

//
// function sortByName(cnt, array){
//     let newUserlist=array.slice();
//     let sortByFirstName = newUserlist.sort(function (a, b) {
//         let nameA = a.name.toLowerCase();
//         let nameB = b.name.toLowerCase();
//         if (cnt===0) {
//             if (nameA < nameB) {
//                 return -1;
//             }
//             if (nameA > nameB) {
//                 return 1;
//             }
//             return 0;
//         }else if(cnt === 1){
//             if (nameA > nameB) {
//                 return -1;
//             }
//             if (nameA < nameB) {
//                 return 1;
//             }
//             return 0;
//         }
//     });
//     return renderItems(sortByFirstName);
// }




class UserSorting extends PureComponent {

// let my = [];

    sortByName= (cnt, array)=>{
        // clientList=array.slice();
        let sortByFirstName = clientList.sort(function (a, b) {
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

    render() {
        const myarr = this.sortByName(0, this.props.array)
        console.log(myarr)
        return (
            <div>
                {/*Sort:*/}
                {/*<button onClick={<UsersResults2ndSample dataList={myarr}/>}>*/}
                    {/*Sort*/}
                {/*</button>*/}

                <UsersResults2ndSample dataList={myarr}/>


                {/*<button onClick={this.sortByPriceDesc}>*/}
                    {/*Desc*/}
                {/*</button>*/}
                {/*/!*<div className="Product">*!/*/}
                    {/*{ this.state.clientList.map((i, index) =>*/}
                        {/*<div key ={index} className="card">*/}
                            {/*<span> { i.name }</span>*/}
                            {/*<span> { i.age }</span>*/}
                        {/*</div>*/}
                    {/*)}*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default UserSorting;