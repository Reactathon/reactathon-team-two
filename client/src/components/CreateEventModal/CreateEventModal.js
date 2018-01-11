import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactModal from 'react-modal'

class CreateEventModal extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleSubmit() {
        this.setState({ showModal: false })
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
                        Name: <input type="text" name="eventName"></input><br></br>
                        Date: <input type="text" name="eventDate"></input><br></br>
                        Location: <input type="text" name="eventLocation"></input><br></br>
                        <button onClick={this.handleSubmit}>Submit</button>
                        <button onClick={this.handleCloseModal}>Close</button>
                    </form>
                </ReactModal>
            </div>
        );
    }
}

export default CreateEventModal