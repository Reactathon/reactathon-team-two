import { ADD_SONG } from '../actions/songActionTypes'


const songReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_SONG:
            return state.concat([action.song])
        default:
            return state
    }
}

export default songReducer