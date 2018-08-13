import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import L14_swapi from './L14_swapi';
import Header from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App />,
        <L14_swapi />
        {/*<App txt="this is props" />,*/}
    </div>,
        document.getElementById('root')
);
registerServiceWorker();
