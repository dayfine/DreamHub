import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

import Grid from 'material-ui/Grid'

import GoalPanel from './Goals/views/GoalPanel'
import { views as Goals } from './Goals'
import { views as Kanban } from './Tasks'
import Checkup from './Tasks/views/Checkup'

import { views as Welcome } from './Welcome'
import { views as TravelForm } from './Travel'
import { views as Friends } from './Friends'
import { views as Auth, Login, Signup } from './Auth'
import { views as UserPanel } from './User'

import NavBar from './common/NavBar'

import store from './Store'
import { fetchCategories } from './Category/actions'
import { loadUserData } from './Auth/actions'

const styles = {}
const storage = window.localStorage

const FrontPage = ({ authenticated }) => {
  return authenticated
    ? (<Home />)
    : (
      <div>
        <Login />
        <Welcome />
      </div>
    )
}

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
        <Checkup />
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
    // const { authenticated } = this.props
    let authenticated = true

    return (
      <div style={{height: '100vh'}}>
        <NavBar children={<Auth />} />
        <Grid container style={{paddingTop: 80}}>
          <Switch>
            <Route path='/' exact render={() => <FrontPage authenticated={authenticated}/>} />
            <Route path='/home' component={Home} />
            <Route path='/kanban/:goalId' component={Kanban} />
            <Route path='/goals/:goalId' component={GoalPanel} />
            <Route path='/friends/' component={Friends} />
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
