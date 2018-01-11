import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Landing from './components/Landing/Landing.js'
import Header from './components/Header/Header'

import About from './components/About/About'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import EditEvent from './components/EditEvent/EditEvent'
import PageNotFound from './components/PageNotFound/PageNotFound'
import AccountInformation from './components/AccountInformation/AccountInformation'
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AddMusician from './components/AddMusician/AddMusician'
import CreateEventModal from './components/CreateEventModal/CreateEventModal'

import {Provider} from 'react-redux'
import createStore from './store/createStore'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import blue from 'material-ui/colors/blue'

import './App.css'
import 'typeface-roboto'

const store = createStore()

const theme = createMuiTheme({
    palette: {
        primary: blue
    }
})

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <MuiThemeProvider theme={theme}>
                        <div className="App">
                            <header className="App-header">
                                <Header/>
                            </header>
                            <Switch>
                                <Route path="/create-event" component={CreateEventModal}/>
                                <Route path="/about" component={About}/>
                                <Route path="/signin" component={SignIn}/>
                                <Route path="/register" component={Register}/>
                                <Route path="/event/:id" component={EditEvent}/>
                                <Route path="/add-musician" component={AddMusician}/>
                                <Route path="/" exact component={Landing}/>
                                <AuthenticatedRoute path="/account-information" component={AccountInformation}/>
                                <Route component={PageNotFound}/>
                            </Switch>
                        </div>
                    </MuiThemeProvider>
                </Router>
            </Provider>
        );
    }
}

export default App;
