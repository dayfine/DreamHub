import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import NavBar from './common/NavBar'
import Footer from './common/Footer'
import Routes from './Routes'

import store from './Store'
import { fetchCategories } from './Category/actions'
import { loadUserData } from './Auth/actions'

const storage = window.localStorage

class App extends Component {
  componentDidMount () {
    store.dispatch(fetchCategories())

    if (storage.authToken) {
      store.dispatch(loadUserData(storage.authToken))
    }
  }

  render () {
    const { authenticated } = this.props
    return (
      <div className={`App${authenticated ? '' : ' Landing'}`}>
        <NavBar clear={!authenticated} />
        <Routes authenticated={authenticated} />
        <Footer clear={!authenticated} />
      </div>
    )
  }
}

const mapState = state => ({
  authenticated: state.authenticated
})

export default withRouter(connect(mapState)(App))
