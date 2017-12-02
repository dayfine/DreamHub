import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import GoalHome from './Goals/views/GoalHome'
import { views as Goals } from './Goals'
import { views as Category } from './Category'
import { views as Welcome } from './Welcome'
import { views as TravelForm } from './Travel'
import { views as Friends } from './Friends'
import { Login, Signup } from './Auth'
import { views as UserPanel } from './User'
import { views as Graph } from './Graph'

const Routes = ({ authenticated }) => {
  return (
    <main>
      <Switch>
        <Route path='/' exact component={authenticated ? Goals : Welcome} />
        <Route path='/home' component={Goals} />
        <Route path='/goals/:goalId' component={GoalHome} />
        <Route path='/friends' component={Friends} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/category' component={Category} />
        <Route path='/me' component={UserPanel} />
        <Route path='/graph' component={Graph} />
      </Switch>
    </main>
  )
}

const mapState = state => ({
  authenticated: state.authenticated
})

export default withRouter(connect(mapState)(Routes))
