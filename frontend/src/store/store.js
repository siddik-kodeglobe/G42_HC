import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import {getDataReducer} from './search/search.reducer';

const rootReducer = combineReducers({
    Search: getDataReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))