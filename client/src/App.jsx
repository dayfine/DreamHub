import React, { Component } from 'react'

import Grid from 'material-ui/Grid'

import { views as Kanban } from './Kanban'
import NavBar from './common/NavBar'

const styles = {}

class App extends Component {
  constructor () {
    super()
  }

  componentDidMoun () {

  }
  render () {
    return (
      <div>
        <NavBar />
        <Grid container style={{paddingTop: 64}}>
          <Grid item xs={2}>
            <a href='/api/auth/google'><button>Login with Google</button></a>
          </Grid>
          <Grid item xs={10}>
            <Kanban />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App
