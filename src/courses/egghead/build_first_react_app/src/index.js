import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './ToDoApp';
import registerServiceWorker from './registerServiceWorker';
import { Router } from './component/router';

// ReactDOM.render(
export class ToDoAppIndex extends React.Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

//   document.getElementById('root')
// );
// registerServiceWorker();
