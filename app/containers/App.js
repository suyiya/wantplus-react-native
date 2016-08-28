/**
 * Created by SUYIYA on 16/8/28.
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import Wantplus from './Wantplus';

import configureStore from '../store/configureStore';

const store = configureStore({});

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Wantplus />
            </Provider>
        );
    }
}