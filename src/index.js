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
    yield takeEvery('FETCH_FAVORITES', fetchFavorites)
    yield takeEvery('ADD_CATEGORY', addCategory)
    yield takeEvery('REMOVE_FAV', removeFav)
}

function* removeFav(action) {
    try {
        console.log('removeFav saga wired!');

        const removeId = action.payload;
        console.log('id to remove:', removeId);
        yield axios.delete(`/api/favorite/${removeId}`);
        
        // GET follows PUT to get updated list
        yield put({type: 'FETCH_FAVORITES'})
    } catch(err) {
        console.log('err in removing favorite', err);  
    }
}

function* addCategory(action) {
    try {
        console.log('addCategory saga wired!');

        const favId = action.payload;
        yield console.log('favId: ', favId);
        yield axios.put(`/api/favorite/${favId}`, {category_id: action.category_id});
        
        // GET follows PUT to get updated list
        yield put({type: 'FETCH_FAVORITES'})
    } catch(err) {
        console.log('err in adding category', err);  
    }
}

function* addFavorite(action) {
    try {
        console.log('addFavorite saga wired!');

        const newFav = action.payload;
        yield console.log('newFav: ', newFav);
        yield axios.post('/api/favorite', {url: newFav});

        // GET follows POST to get updated list
        yield put({type: 'FETCH_FAVORITES'})
    } catch(err) {
        console.log('err in adding addFavorite', err);
    }
}

function* fetchFavorites() {
    try {
        console.log('fetchFavorite saga wired!');
        
        const response = yield axios.get('/api/favorite');
        yield console.log('favorite list: ', response.data);

        // GETs data from server and stores in favorite reducer
        const action = {type: 'SET_FAVORITES', payload: response.data};
        yield put(action);
    } catch(err) {
        console.log('err in fetchFavorites', err);
    }
}

// category reducer
const category = (state =[], action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return [...state, action.payload];
        default:
            return state;
    }
}

// favorite reducer
const favorite = (state =[], action) => {
    switch (action.type) {
        // case 'ADD_FAVORITE':
        //     return [...state, action.payload];
        case 'SET_FAVORITES':
            return action.payload;
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
