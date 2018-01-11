import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import profileReducer from '../reducers/profileReducer'
import eventReducer from '../reducers/eventReducer'
import eventsReducer from '../reducers/eventsReducer'

const rootReducer = combineReducers({user: userReducer, profile: profileReducer, event: eventReducer, events: eventsReducer})

export default () => {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger))
    return store
}