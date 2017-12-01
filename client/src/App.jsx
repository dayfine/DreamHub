import React, { Component } from 'react'

import NavBar from './common/NavBar'
import Footer from './common/Footer'
import Routes from './Routes'

import store from './Store'
import { fetchCategories } from './Category/actions'
import { loadUserData } from './Auth/actions'

const storage = window.localStorage

export default class App extends Component {
  componentDidMount () {
    store.dispatch(fetchCategories())

    if (storage.authToken) {
      store.dispatch(loadUserData(storage.authToken))
    }
  }

  render () {
    return (
      <div className='App'>
        <NavBar />
        <Routes />
        <Footer />
      </div>
    )
  }
}
