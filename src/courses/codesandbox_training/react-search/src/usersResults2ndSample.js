import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

class UsersResults2ndSample extends PureComponent {
    render() {
        return (

            <div className="component-users-results">
                {this.props.dataList.map(i => (
                    <div key={i.name} className="component-user-row">
                        <img  src={require(`./images/${i.image}.svg`)}/>
                        <span  className="user-name"> {i.name} </span>
                        <span  className="user-age">{i.age}</span>
                    </div>
            ))}
            </div>

            );
        }
    }

export default UsersResults2ndSample;