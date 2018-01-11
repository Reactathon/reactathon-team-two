//import axios from 'axios'
const eventsList = [{id: 1, name: "John Doe", date: "20170101", location: "Jonah Group Office"}];

export const getAllEvents = () => {
    // const result = await axios({
    //     url: 'http://localhost:8080/events',
    //     method: 'get'
    // });
    //
    // return result.data
    return eventsList;
}

export const saveEvent = async (event) => {
    if (!event.id && eventsList[event.id]) {
        event.id = eventsList.length;
        eventsList.push(event);
    } else {
        eventsList[event.id] = event
    }
    return event;
}

export const retrieveEvent = (eventId) => {
    return eventsList[eventId]
}