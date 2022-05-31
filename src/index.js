import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReduxers, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('ADD_FAVORITE', addFavorite)
}

function* addFavorite() {
    try {
        console.log('addFavorite saga wired!');
        

    } catch(err) {
        console.log('err in adding addFavorite', err);
        
    }
}

// category reducer
const category = (state =[], action) => {
    switch (action.type) {
    
        default:
            return state;
    }
}

// favorite reducer
const favorite = (state =[], action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return [...state, action.payload];
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        category,
        favorite
    }),
    applyMiddleware(logger, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
