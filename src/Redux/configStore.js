import { createStore, combineReducers } from 'redux'

import reducer from './store';

const rootReducer= combineReducers({
    items:reducer
})

const configureStore = ()=>{
    return createStore(rootReducer)
}

export default configureStore;