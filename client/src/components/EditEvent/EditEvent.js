import React, { Component } from 'react'

import { connect } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import "react-table/react-table.css";

import {loadProfile} from '../../actions/profileActions'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ReactTable from "react-table";
import { makeData } from "./Helper";
import AddMusician from '../AddMusician/AddMusician'

class EditEvent extends Component {

    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getProfile(id)
    }

    render() {
        const { data } = this.state;
        return (
                    <Tabs>
                    <TabList>
                        <Tab>Practice Schedule</Tab>
                        <Tab>Event</Tab>
                        <Tab>Musician</Tab>
                    </TabList>
                    <TabPanel>
                        <h2>Schedule for Event {this.props.match.params.id}</h2>
                        <div>
                            <ReactTable
                                data={data}
                                columns={[
                                    {
                                        Header: "Name",
                                        columns: [
                                            {
                                                Header: "First Name",
                                                accessor: "firstName"
                                            },
                                            {
                                                Header: "Last Name",
                                                id: "lastName",
                                                accessor: d => d.lastName
                                            }
                                        ]
                                    },
                                    {
                                        Header: "Info",
                                        columns: [
                                            {
                                                Header: "Age",
                                                accessor: "age"
                                            },
                                            {
                                                Header: "Status",
                                                accessor: "status"
                                            }
                                        ]
                                    },
                                    {
                                        Header: 'Stats',
                                        columns: [
                                            {
                                                Header: "Visits",
                                                accessor: "visits"
                                            }
                                        ]
                                    }
                                ]}
                                defaultPageSize={10}
                                className="-striped -highlight"
                            />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Location + Schedule List</h2>
                        <ul>
                            <li>Location 1 Schedule</li>
                            <li>Location 2 Schedule</li>
                        </ul>
                        <h2>Song List</h2>
                        <ul>
                            <li>Song 1</li>
                            <li>Song 2</li>
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <AddMusician/>
                    </TabPanel>
                </Tabs>)
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

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent)