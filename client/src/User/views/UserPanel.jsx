import React from 'react'
import { connect } from 'react-redux'

import Card, { CardContent, CardHeader } from 'material-ui/Card'

const UserPanel = props => {
  const { user, goals } = props
  return (
    <Card>
      <CardHeader title={user.name} />
      <CardContent>
        Email: {user.email}
        <br />
        {goals.length} Goals
        <br />
        The goals above should be a link
      </CardContent>
    </Card>
  )
}

const mapState = state => ({
  user: state.currentUser,
  goals: state.goals
})

export default connect(mapState)(UserPanel)
