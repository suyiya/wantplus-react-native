/**
 * Created by SUYIYA on 16/8/28.
 */

import { merge, omit, union } from 'lodash';
import * as types from '../actions/actionTypes';

const initialState = {
    isFetching: false
};

export function register(state = initialState, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}