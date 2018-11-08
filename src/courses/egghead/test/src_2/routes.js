import React from 'react';

import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
// import MainPage from './components/MainPage';
import Form from './pages/valedated-input';
import Home from './pages/home';
// import SomeOtherPage from './components/SomeOtherPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/v1" component={Form} />
        {/*<Route path="/some/otherpage" component={SomeOtherPage} />*/}
    </Route>
);