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
                        <h2>Suggested Practice Schedule</h2>
                        <div>Magic goes here</div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Song List</h2>
                        <ul>
                            <li>Song 1</li>
                            <li>Song 2</li>
                        </ul>
                        <button>Add</button>
                        <h2>Schedule for Drew's Place</h2>
                        <div>
                            <ReactTable
                                data={data}
                                columns={[
                                    {
                                        columns: [
                                            {
                                                Header: "Date"
                                            },
                                            {
                                                Header: "Sunday",
                                                accessor: "Sunday"
                                            },
                                            {
                                                Header: "Monday",
                                                id: "lastName",
                                                accessor: d => d.lastName
                                            },
                                            {
                                                Header: "Tuesday",
                                                accessor: "age"
                                            },
                                            {
                                                Header: "Wednesday",
                                                accessor: "status"
                                            },
                                            {
                                                Header: "Thursday",
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