import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

import Grid from 'material-ui/Grid'

import GoalPanel from './Goals/views/GoalPanel'
import { views as Goals } from './Goals'
import { views as Kanban } from './Tasks'
import { views as Welcome } from './Welcome'

import { views as Friends } from './Friends'
import { views as Auth, Login, Signup } from './Auth'
import { views as UserPanel } from './User'

import NavBar from './common/NavBar'
import Sidebar from './common/Sidebar'

import store from './Store'
import { fetchCategories } from './Category/actions'
import { loadUserData } from './Auth/actions'

const styles = {}
const storage = window.localStorage

const Home = props => {
  return (
    <Grid container>
      <Grid item xs={8} >
        <Goals />
      </Grid>
      <Grid item xs={4} >
        <UserPanel />
      </Grid>
    </Grid>
  )
}

class App extends Component {
  componentDidMount () {
    store.dispatch(fetchCategories())

    if (storage.authToken) {
      store.dispatch(loadUserData(storage.authToken))
    }
  }

  render () {
    // const { isAuthenticated } = this.props
    let isAuthenticated = true
    let viewPaths = [
      {view: Home, path: '/home', name: 'Home'},
      {view: Welcome, path: '/welcome', name: 'Welcome'},
      {view: GoalPanel, path: '/goals/:goalId', name: 'Goal Panel'},
      {view: Friends, path: '/friends', name: 'Friends'},
      {view: Login, path: '/login', name: 'Login'},
      {view: Kanban, path: '/kanban/:goalId', name: 'Kanban', disbaled: true}
      // {view: Goals, path: '/goals', name: 'Goals'},
      // {view: Signup, path: '/signup', name: 'Sign Up'},
      // {view: UserPanel, path: '/me', name: 'User'}
    ]

    if (!isAuthenticated) viewPaths = viewPaths.filter(obj => obj.name === 'Login')

    return (
      <div style={{height: '100vh'}}>
        <NavBar children={<Auth />} />
        <Grid container style={{paddingTop: 80}}>
          <Grid item xs={2} >
            <Sidebar viewPaths={viewPaths} />
          </Grid>
          <Grid item xs={10}>
            <Switch>
              <Route path='/' exact component={Home} />
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

const mapState = state => ({
  isAuthenticated: !!state.currentUser.id
})

export default withRouter(connect(mapState)(App))
