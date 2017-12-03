import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GoalHome from './Goals/views/GoalHome'
import { views as Goals } from './Goals'
import { views as Explore } from './Explore'
import { views as Welcome } from './Welcome'
import { views as Friends } from './Friends'
import { Login, Signup } from './Auth'
import { views as UserPanel } from './User'

export default ({ authenticated }) => {
  return (
    <main

    >
      <Switch>
        <Route path='/' exact component={authenticated ? Goals : Welcome} />
        <Route path='/home' component={Goals} />
        <Route path='/explore' component={Explore} />
        <Route path='/goals/:goalId' component={GoalHome} />
        <Route path='/friends' component={Friends} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/me' component={UserPanel} />
      </Switch>
    </main>
  )
}
