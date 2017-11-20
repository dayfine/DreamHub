import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Grid from 'material-ui/Grid'

import { views as GoalForm } from './Goals'
// import { views as TaskForm } from './Tasks'
import { views as Kanban } from './Kanban'

import { views as Friends } from './Friends'
import { views as Auth, Login, Signup } from './Auth'
import { views as UserPanel } from './User'

import NavBar from './common/NavBar'
import Sidebar from './common/Sidebar'

const styles = {}

class App extends Component {

  render () {
    const viewPaths = [
      {view: GoalForm, path: '/goals', name: 'Goals'},
      {view: Kanban, path: '/kanban', name: 'Kanban'},
      // {view: TaskForm, path: '/tasks', name: 'Tasks'}
      {view: Friends, path: '/friends', name: 'Friends'},
      {view: Login, path: '/login', name: 'Login'},
      {view: Signup, path: '/signup', name: 'Sign Up'},
      {view: UserPanel, path: '/me', name: 'User'}
    ]

    return (
      <div style={{height: '100vh'}}>
        <NavBar children={<Auth />} />
        <Grid container style={{paddingTop: 80}}>
          <Grid item xs={2} >
            <Sidebar viewPaths={viewPaths} />
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
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App
