/**
 * Created by amitava on 31/01/16.
 */
import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

//import entities from './entities';
import errorMessage from './error';
import toast from './toast';
import session from './session';

export default combineReducers({
    errorMessage,
    toast,
    session,
    routing: routeReducer
});