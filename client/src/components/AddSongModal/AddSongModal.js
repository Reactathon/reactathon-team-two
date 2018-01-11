import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'
import { addSong } from '../../actions/songActions'

class AddSongModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            band: '',
            length: '',
            instruments: [],
            showModal: false
        };
    }

    handleOpenModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    handleSubmit = () => {
        const { name, band, length, instruments } = this.state
        this.props.addSong({ name, band, length, instruments })
        this.setState({
            name: '',
            band: '',
            length: '',
            instruments: [],
            showModal: false
        })
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleBandChange = (event) => {
        this.setState({ band: event.target.value })
    }

    handleLengthChange = (event) => {
        this.setState({ length: event.target.value })
    }

    handleAddInstrument = () => {
        this.setState({ instruments: this.state.instruments.concat([{}]) });
    }

    updateIntrument = index => event => {
        const instruments = this.state.instruments
        const instrument = instruments[index]
        instrument.type = event.target.value
        this.setState({ instruments })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOpenModal}>Trigger Modal</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Add Song"
                >
                    <form>
                        Name: <input type="text" name="songName" value={this.state.name} onChange={this.handleNameChange} ></input><br></br>
                        Band: <input type="text" name="songBand" value={this.state.band} onChange={this.handleBandChange} ></input><br></br>
                        Length: <input type="text" name="songLength" value={this.state.length} onChange={this.handleLengthChange} ></input><br></br>

                        {/* https://stackoverflow.com/questions/36512686/react-dynamically-add-input-fields-to-form */}
                        <div>
                            {this.state.instruments.map((instrument, index) => <input key={index} value={instrument.type} onChange={this.updateIntrument(index)} />)}
                        </div>
                        <button onClick={this.handleAddInstrument} type="button">Add Instrument</button>
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
        addSong: (song) => dispatch(addSong(song))
    }
}

export default connect(null, mapDispatchToProps)(AddSongModal)