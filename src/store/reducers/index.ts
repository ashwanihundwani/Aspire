import { combineReducers } from 'redux';

import debitCardReducer from './debitCardReducer';
import loadingReducer from './loadingReducer';


export default combineReducers({
    debitCardReducer,
    loadingReducer
});