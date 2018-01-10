import { SET_PROFILE } from './profileActionTypes'
import { fetchProfile } from '../services/profileService'

export const setProfile = profile => {
    return {
        type: SET_PROFILE,
        profile
    }
}

export const loadProfile = profileId => async dispatch => {
    try {
        const profile = await fetchProfile(profileId)
        return dispatch(setProfile(profile))
    } catch (e) {
        // Error handle incorrect user password, locked out users etc...
    }
}