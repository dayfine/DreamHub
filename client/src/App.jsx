import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

import Grid from 'material-ui/Grid'

import GoalPanel from './Goals/views/GoalPanel'
import { views as Goals } from './Goals'
import { views as Kanban } from './Tasks'
import { views as Welcome } from './Welcome'
import { views as TravelForm } from './Travel'
import { views as Friends } from './Friends'
import { Login, Signup } from './Auth'
import { views as UserPanel } from './User'

import NavBar from './common/NavBar'

import store from './Store'
import { fetchCategories } from './Category/actions'
import { loadUserData } from './Auth/actions'

const storage = window.localStorage

const Home = props => {
  return (
    <Grid container>
      <Grid item xs={9} >
        <TravelForm />
        {/*
          display travel component only if user responds "yes"
          to the Travel question in the cards
        */}
        <Goals />
      </Grid>
      <Grid item xs={3} >
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
    const { authenticated } = this.props

    return (
      <div className='App'>
        <NavBar />
        <Grid container style={{paddingTop: 80}}>
          <Switch>
            <Route path='/' exact component={authenticated ? Home : Welcome} />
            <Route path='/home' component={Home} />
            <Route path='/kanban/:goalId' component={Kanban} />
            <Route path='/goals/:goalId' component={GoalPanel} />
            <Route path='/friends/' component={Friends} />
            <Route path='/login/' component={Login} />
            <Route path='/signup/' component={Signup} />
          </Switch>
        </Grid>
      </div>
    )
  }
}

const mapState = state => ({
  authenticated: state.authenticated
})

export default withRouter(connect(mapState)(App))
