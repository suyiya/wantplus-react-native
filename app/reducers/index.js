/**
 * Created by SUYIYA on 16/8/28.
 */

import { combineReducers } from 'redux';
import { register } from './register';
import { userLogin } from './login';

const rootReducer = combineReducers({
    register,
    userLogin
});

export default rootReducer;