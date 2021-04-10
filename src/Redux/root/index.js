import { combineReducers } from 'redux';
 import {UserReducer} from '../UserReducer';
import {PhimReducer} from '../PhimReducer'
export default combineReducers({
    UserReducer,
    PhimReducer
})

