import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import clientList from "./data.json";
import RenderUsersList from './clientList'
import FilterUserList from './filterUsers'
import UsersResults from './usersResults'
import UsersResultsRow from './usersResultsRow'
import SearchInput from "./SearchInput";
import UserSorting from './usersSorting'

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filterUserList: FilterUserList('')
        };
    }
    handleSearchChange= input => {
        this.setState({
            filterUserList: FilterUserList(input.target.value)
        })

    }
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
              <form id="find_form">
                  <div className="search-block">
                        <SearchInput textChange={this.handleSearchChange}/>

                          {/*<button  type="button" value="ClearAll" id="clear-button">Clear all</button>*/}
                          {/*<button  type="button" value="Sort" id="sort-button">Sort</button>*/}
                  </div>
                  <div>
                      <UserSorting/>
                      <UsersResults dataList={this.state.filterUserList}/>
                  </div>
              </form>
          </div>

    );
  }
}

export default App;
