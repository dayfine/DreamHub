import React, { Component } from 'react';
import { views as GoalForm } from './Goals';
import store, { getGoals } from './Store';
import { Route, Switch } from 'react-router-dom'

import Grid from 'material-ui/Grid'

import { views as Kanban } from './Kanban'

import NavBar from './common/NavBar'
import SideBar from './common/SideBar'

const styles = {}

class App extends Component {
  componentDidMount () {
    // fetch from store here
    store.dispatch(getGoals());
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
              {viewPaths.map((_, idx) => {
                return (
                  <Route key={idx} path={_.path} component={_.view} />
                )
              })}
            </Switch>
             <main>
              <h1>Do It!</h1>
              {
                // TO DO:
                // if user not logged in: <a href='/api/auth/google'><button>Login with Google</button></a> else:
                <GoalForm userId={ 1 } /> // userId hardcoded. need to change this.
              }
            </main>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App
