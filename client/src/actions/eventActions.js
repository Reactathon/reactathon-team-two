import {CREATE_EVENT} from './eventActionTypes'

export const setEvent = event => {
    return {
        type: CREATE_EVENT,
        event: event
    }
}


export const createEvent = (event) => async dispatch => {
    try{
        return dispatch(setEvent(event))
    } catch (e) {
        //error
    }
}