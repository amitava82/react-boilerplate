/**
 * Created by amitava on 31/01/16.
 */
import { resolve, reject as _reject } from '../middleware/simple-promise';
import extend from 'lodash/extend';
import {push, goBack, replace, } from 'react-router-redux';

import createAction from '../createActions';

const [STORE_SESSION, SIGNUP, LOGIN, SAVE_SETTINGS, DELETE_ACCOUNT] = createAction('session', ["STORE_SESSION", "SIGNUP", "LOGIN", "SAVE_SETTINGS", "DELETE_ACCOUNT"]);

const initialState = {
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null
};

export default function(state = initialState, action = {}){
    switch (action.type){
        case STORE_SESSION:
            return extend({}, state, {
                user: action.payload,
                isLoggedIn: !!action.payload._id,
                loading: false,
                error: null
            });

        default:
            return state;
    }
}

export function storeSession(session){
    return {
        type: STORE_SESSION,
        payload: session
    }
}

