import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import clientList from "./data.json";
import UsersResultsRow from "./usersResultsRow";
// import './userResultsRow.css';


class UsersResults extends PureComponent {
    render() {
        return (
            <div className="component-users-results">
                {this.props.dataList.map(i => (
                    <UsersResultsRow
                        key={i.name}
                        age={i.age}
                        image={i.image}
                        name={i.name}
                     />
            ))}
            </div>
        );
    }

}

export default UsersResults;