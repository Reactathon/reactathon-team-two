import React, { Component } from 'react'

import UserProfile from './UserProfile'
import { connect } from 'react-redux'

import {loadProfile} from '../../actions/profileActions'

class Profile extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getProfile(id)
    }

    render() {
        const {profile} = this.props
        return <UserProfile firstName={profile.firstName} lastName={profile.lastName} email={profile.email} />
    }

}

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProfile: profileId => dispatch(loadProfile(profileId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
