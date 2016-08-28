/**
 * Created by SUYIYA on 16/8/28.
 */

'use strict'

import { camelizeKeys } from 'humps';
var Symbol = require('es6-symbol');

//const API_ROOT = 'http://192.168.3.91/api/';
//const API_ROOT = 'http://localhost:3000/api/';
const API_ROOT = 'http://gubaochina.com/api/';

function callApi(endpoint, method = 'GET', data = {}) {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    let header = {
        headers: {
            authorization: '',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: method
    };
    if (method === 'POST') {
        header.body = JSON.stringify(data);
    }

    return fetch(fullUrl, header).then(response =>
        response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
        if (!response.ok) {
            return Promise.reject(json);
        }

        const camelizedJson = camelizeKeys(json);

        return Object.assign({}, camelizedJson);
    });
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    const callAPI = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let { endpoint } = callAPI;
    const { types, method, data } = callAPI;

    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState());
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.');
    }
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.');
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.');
    }

    function actionWith(data) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    }

    const [ requestType, successType, failureType ] = types;
    next(actionWith({ type: requestType }));

    return callApi(endpoint, method, data).then(
        response => next(actionWith({
            response,
            type: successType
        })),
        error => next(actionWith({
            type: failureType,
            error: error.message || 'Something bad happened'
        }))
    );
}
