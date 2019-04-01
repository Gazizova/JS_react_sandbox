import React, { Component } from 'react';
import MainPage from './loginApp/MainPage';
import LoginPage from './loginApp/LoginPage';
import { UserConsumer, UserProvider } from './loginApp/UserContext';
import { EmailProvider } from './loginApp/EmailContext';

import './index.css';

function Root() {
  return <UserConsumer>{({ user }) => (user ? <MainPage /> : <LoginPage />)}</UserConsumer>;
}

export class LoginApp extends Component {
  render() {
    return (
      <UserProvider>
        <EmailProvider>
          <Root />
        </EmailProvider>
      </UserProvider>
    );
  }
}
