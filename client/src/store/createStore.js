import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import profileReducer from '../reducers/profileReducer'
import eventReducer from '../reducers/eventReducer'

const rootReducer = combineReducers({user: userReducer, profile: profileReducer, event: eventReducer})

export default () => {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger))
    return store
}