import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import profileReducer from '../reducers/profileReducer'
import eventReducer from '../reducers/eventReducer'
import eventsReducer from '../reducers/eventsReducer'
import songReducer from '../reducers/songReducer'

const rootReducer = combineReducers({user: userReducer, profile: profileReducer, event: eventReducer, events: eventsReducer, songs:songReducer})

export default () => {
    const store = createStore(rootReducer, {songs:[]},applyMiddleware(thunk, logger))
    return store
}