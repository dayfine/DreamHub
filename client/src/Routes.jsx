import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Grid from 'material-ui/Grid'

import GoalHome from './Goals/views/GoalHome'
import { views as Goals } from './Goals'
import { views as Kanban } from './Tasks'
import { views as Welcome } from './Welcome'
import { views as TravelForm } from './Travel'
import { views as Friends } from './Friends'
import { Login, Signup } from './Auth'
import { views as UserPanel } from './User'

const Routes = ({ authenticated }) => {
  return (
    <Grid container style={{paddingTop: 120, maxWidth: 1200, margin: '0 auto'}}>
      <Switch>
        <Route path='/' exact component={authenticated ? Goals : Welcome} />
        <Route path='/home' component={Goals} />
        <Route path='/kanban/:goalId' component={Kanban} />
        <Route path='/goals/:goalId' component={GoalHome} />
        <Route path='/friends' component={Friends} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/me' component={UserPanel} />
      </Switch>
    </Grid>
  )
}

const mapState = state => ({
  authenticated: state.authenticated
})

export default withRouter(connect(mapState)(Routes))
