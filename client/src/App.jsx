import React, { Component } from 'react'

import Grid from 'material-ui/Grid'

import { views as Kanban } from './Kanban'

const styles = {}

class App extends Component {
  constructor () {
    super()
  }

  componentDidMoun () {

  }
  render () {
    return (
      <Grid container>
        <div className='navBar' />
        <Grid item xs={2} />
        <Grid item xs={10}>
          <Kanban />
          <a href='/api/auth/google'><button>Login with Google</button></a>
        </Grid>
      </Grid>
    )
  }
}

export default App
