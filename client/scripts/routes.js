/**
 * Created by amitava on 30/01/16.
 */
import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';
import get from 'lodash/get';


import {
    HomeContainer
} from './routes/home';

import Error from './routes/misc/Error';

import App from './app';


export default (store) => {

    function ensureLoggedIn(nextState, replace, cb){
        const {session: {isLoggedIn, user}} = store.getState();
        if(!isLoggedIn){
            replace({pathname: '/login'});
        }
        cb();
    }

    return (
        <Route path="/" component={App}>
            <IndexRedirect to="/home"/>
            <Route path="/home" component={HomeContainer} />
            <Route path="/error" component={Error} />
        </Route>
    );
};