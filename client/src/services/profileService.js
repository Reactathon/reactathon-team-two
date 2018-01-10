import axios from 'axios'

export const fetchProfile = async profileId => {
    const result = await axios.get(`http://localhost:8080/profile/${profileId}`)
    return result.data
}