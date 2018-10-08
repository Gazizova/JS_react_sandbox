import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-input-range/lib/css/index.css'

ReactDOM.render(
    
    <App/>,
    document.getElementById('root'));

serviceWorker.unregister();
