import React from 'react';
import ReactDOM from 'react-dom';
// import {Router} from 'react-router';
// import { browserHistory} from 'react-router';
import './index.css';
import App from './App';
import L14_swapi from './L14_swapi';
import routes from './routes'
import Header from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Router, browserHistory } from 'react-router';
// import routes from './routes';


ReactDOM.render(
    <div>
        {/*<App />,*/}
        <Router history={browserHistory }  routes={routes} />,
        {/*<L14_swapi />*/}
        {/*<App txt="this is props" />,*/}
    </div>,
        document.getElementById('root')
);
registerServiceWorker();
