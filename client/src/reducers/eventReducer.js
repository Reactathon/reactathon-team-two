import { CREATE_EVENT } from '../actions/eventActionTypes'


const eventReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_EVENT:
            return action.event 
        default:
            return state
    }
}

export default eventReducer