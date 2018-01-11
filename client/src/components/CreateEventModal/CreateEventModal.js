import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactModal from 'react-modal'
import {createEvent} from '../../actions/eventActions'
import { connect } from 'react-redux'

class CreateEventModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: '',
            location: '',
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        // dont need this since we used arrow functions
        // this.handleNameChange = this.handleNameChange.bind(this);
        // this.handleDateChange = this.handleDateChange.bind(this);
        // this.handleLocationChange = this.handleLocationChange(this);
        // this.handleSubmit = this.handleSubmit(this)
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleSubmit = () => {
        const {name, date, location} = this.state
        this.props.event({name, date, location})
        this.setState({ 
            name: '',
            date: '',
            location: '',
            showModal: false 
        })
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    handleDateChange = (event) => {
        this.setState({date: event.target.value})
    }

    handleLocationChange = (event) => {
        this.setState({location: event.target.value})
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOpenModal}>Trigger Modal</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <form>
                        Name: <input type="text" name="eventName" value={this.state.name} onChange={this.handleNameChange} ></input><br></br>
                        Date: <input type="text" name="eventDate" value={this.state.date}  onChange={this.handleDateChange} ></input><br></br>
                        Location: <input type="text" name="eventLocation" value={this.state.location}  onChange={this.handleLocationChange} ></input><br></br>
                        <button onClick={this.handleSubmit} type="button">Submit</button>
                        <button onClick={this.handleCloseModal} type="button">Close</button>
                    </form>
                </ReactModal>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        event: (event) => dispatch(createEvent(event))
    }
}

export default connect(null, mapDispatchToProps)(CreateEventModal)