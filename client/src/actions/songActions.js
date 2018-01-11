import {ADD_SONG} from './songActionTypes'

export const setSong = song => {
    return {
        type: ADD_SONG,
        song: song
    }
}


export const addSong = (song) => async dispatch => {
    try{
        return dispatch(setSong(song))
    } catch (e) {
        //error
    }
}