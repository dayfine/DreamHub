import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import NavBar from './common/NavBar'
import Footer from './common/Footer'
import Routes from './Routes'

import store from './Store'
import { fetchCategories } from './Category/actions'
import { fetchPastGoals } from './Explore/actions'
import { loadUserData } from './Auth/actions'

const storage = window.localStorage

class App extends Component {
  componentDidMount () {
    store.dispatch(fetchCategories())
    store.dispatch(fetchPastGoals())

    if (storage.authToken) {
      store.dispatch(loadUserData(storage.authToken))
    }
  }

  render () {
    const authenticated = !!storage.authToken
    return (
      <div className={`App${authenticated ? '' : ' Landing'}`}>
        <NavBar clear={!authenticated} />
        <Routes authenticated={authenticated} />
        <Footer clear={!authenticated} />
      </div>
    )
  }
}

export default withRouter(App)
