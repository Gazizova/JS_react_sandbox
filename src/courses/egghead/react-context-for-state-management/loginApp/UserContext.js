import React, { Component } from 'react';
import { FAKE_USER } from './api';

const { Provider, Consumer } = React.createContext();
// Context.Consumer, Context.Provider

class UserProvider extends Component {
  state = {
    currentUser: FAKE_USER
  };
  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    return (
      <Provider
        value={{
          user: this.state.currentUser,
          onLogout: this.handleLogout,
          onLogin: this.handleLogin
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

// export default UserProvider;
export { UserProvider, Consumer as UserConsumer };
