import {CREATE_EVENT, SET_EVENTS, EDIT_EVENT} from './eventActionTypes'
import { getAllEvents, retrieveEvent, saveEvent } from '../services/eventService'

export const setEvent = event => {
    return {
        type: CREATE_EVENT,
        event: event
    }
}

export const setEvents = events => {
    return {
        type: SET_EVENTS,
        events
    }
}

export const createEvent = (event) => async dispatch => {
    try{
        return dispatch(setEvent(event))
    } catch (e) {
        //error
    }
}
//
// export const loadEvent = eventId => async dispatch => {
//     try {
//         const event = await retrieveEvent(eventId)
//         return dispatch(setEvent(event))
//     } catch (e) {
//         // Error handle incorrect user password, locked out users etc...
//     }
// }
//
// export const storeEvent = event => async dispatch => {
//     try {
//         const event = await saveEvent(event)
//         return dispatch(setEvent(event))
//     } catch (e) {
//         // Error handle incorrect user password, locked out users etc...
//     }
// }

export const loadEvents = () => async dispatch => {
    try {
       const events = await getAllEvents()
       return dispatch(setEvents(events))
    } catch (e) {
        console.log(e)
    }
}