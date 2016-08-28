/**
 * Created by SUYIYA on 16/8/28.
 */

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, api)
    )
}