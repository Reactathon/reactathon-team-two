import React, { Component } from 'react'

import ReactTable from 'react-table'
import Link from 'react-router-dom/Link'
import { connect } from 'react-redux'

import {loadEvents} from '../../actions/eventActions'
import 'react-table/react-table.css'

class Events extends Component {

    componentDidMount() {

        this.props.getEvents()
    }

    render() {
        const {events} = this.props
        // const data = [{
        //     name: 'Tanner Linsley',
        //     age: 26,
        //     friend: {
        //         name: 'Jason Maurer',
        //         age: 23,
        //     }
        // },{
        //     ...
        // }]

        const columns = [{
                Header: 'Event Name',
                accessor: 'name',
                Cell: props1 => <Link to={`/event/${props1.original.id}`}>{props1.value}</Link>
            }, {
                Header: 'Event Date',
                accessor: 'date',
                Cell: props => <span className='date'>{props.value}</span> // Custom cell components!
            }, {
                Header: 'Location of Event',
                accessor: 'location'
            }]


         //<UserProfile firstName={profile.firstName} lastName={profile.lastName} email={profile.email} />
        return <div><ReactTable data={events} columns={columns} /><Link to={'/create-event'}>Add a New Event</Link> </div>
    }

}

const addNewEvent = () =>{
    alert("Add!")
}

const mapStateToProps = state => {
    return {
        events: state.events
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEvents: () => dispatch(loadEvents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events)
