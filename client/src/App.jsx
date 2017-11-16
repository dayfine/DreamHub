import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Grid from 'material-ui/Grid'

import { views as Kanban } from './Kanban'
// import { views as Auth } from './Auth'
import NavBar from './common/NavBar'
import SideBar from './common/SideBar'

const styles = {}

class App extends Component {
  componentDidMoun () {
    // fetch from store here
  }

  render () {
    const viewPaths = [
      {view: Kanban, path: '/kanban', name: 'Kanban'}
    ]

    return (
      <div style={{height: '100vh'}}>
        <NavBar />
        <Grid container style={{paddingTop: 80}}>
          <Grid item xs={2} >
            <SideBar viewPaths={viewPaths} />
          </Grid>
          <Grid item xs={10}>
            <Switch>
              <Route path='/' exact component={Kanban} />
              {viewPaths.map(_ => {
                return (
                  <Route path={_.path} component={_.view} />
                )
              })}
            </Switch>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App
