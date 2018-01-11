import React, {Component} from 'react'
import {connect} from 'react-redux'

class AddMusician extends Component {

    static defaultProps = {
        songs: [
            {
                name: 'Day Tripper',
                band: 'The Beatles',
                link: 'https://www.youtube.com/watch?v=yyPCKgzoiVk',
                instruments: ['Vocals', 'Lead Guitar', 'Bass', 'Backup Vocals', 'Drums', 'Guitar', 'Tambourine']
            },
            {
                name: 'The Weight',
                band: 'The Band',
                link: 'https://www.youtube.com/watch?v=FFqb1I-hiHE',
                instruments: ['Vocals', 'Electric Guitar', 'Bass', 'Drums', 'Acoustic Guitar', 'Piano']
            }
        ]
    }

    constructor(props) {
        super(props)
        this.state = {
            musician: {
                songs: []
            }
        }
    }

    handleSongRankChange(index, event) {
        const {musician} = this.state
        const {songs} = this.props
        const song = songs[index]
        musician.songs = musician.songs.filter((musicianSong) =>
            musicianSong.name !== song.name && musicianSong.band !== song.band
        )
        if (event.target.value !== '') {
            song.rank = event.target.value
            musician.songs.push(song)
        }
        this.setState({musician: musician})
    }

    render() {
        const {songs} = this.props
        const songRankOptions = songs.map((song, index) =>
            <option key={index}>{index+1}</option>
        )
        const tableRows = songs.map((song, index) => {
                const {name, band, link, instruments} = song
                const instrumentRankOptions = instruments.map((instrument, index) =>
                    <option key={index}>{index+1}</option>
                )
                const instrumentList = instruments.map((instrument, index) =>
                    <li key={index}>
                        {instrument}:
                        <select>
                            <option/>
                            {instrumentRankOptions}
                        </select>
                    </li>
                )
                return (
                    <tr key={index}>
                        <td>{name}</td>
                        <td>{band}</td>
                        <td><a href={link}>{link}</a></td>
                        <td><ul>{instrumentList}</ul></td>
                        <td>
                            <select onChange={this.handleSongRankChange.bind(this, index)}>
                                <option/>
                                {songRankOptions}
                            </select>
                        </td>
                    </tr>
                )
            }
        )

        return (
            <div>
                <div>
                    <h1>Schedule</h1>
                    <span>Set your availability for the practices</span>
                </div>
                <div>
                    <h1>Songs</h1>
                    <span>Select which songs you'd like to perform</span>
                    <table>
                        <thead>
                            <tr>
                                <th>Song</th>
                                <th>Artist</th>
                                <th>Link</th>
                                <th>Sign up</th>
                                <th>Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>
                    <button>Add Songs</button>
                </div>
                <div>
                    <button>Save</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps)(AddMusician)