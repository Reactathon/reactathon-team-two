import React from 'react'
import Events from '../Events/Events.js'

const Landing = () => {
    return (
        <div>
            <h2>Welcome to Jonah's First Reactathon!</h2>
            <button>Create Event!</button>
            <h2>Events List</h2>
            <Events/>
        </div>
    )
}

export default Landing