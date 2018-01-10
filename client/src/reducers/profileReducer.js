import { SET_PROFILE } from '../actions/profileActionTypes'


const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return action.profile
        default:
            return state
    }
}

export default profileReducer