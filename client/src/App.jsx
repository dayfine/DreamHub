import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Grid from 'material-ui/Grid'

import { views as GoalForm } from './Goals'
import { views as TaskForm } from './Tasks'
import { views as Kanban } from './Kanban'

import NavBar from './common/NavBar'
import Sidebar from './common/Sidebar'

import store, { getGoals, getTasks } from './Store'

const styles = {}

class App extends Component {
  componentDidMount () {
    // fetch from store here
    store.dispatch(getGoals())
    store.dispatch(getTasks())
  }

  render () {
    const viewPaths = [
      {view: Kanban, path: '/kanban', name: 'Kanban'},
      {view: GoalForm, path: '/goal', name: 'Goal'},
      {view: TaskForm, path: '/tasks', name: 'Tasks'}
    ]

    return (
      <div style={{height: '100vh'}}>
        <NavBar />
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
