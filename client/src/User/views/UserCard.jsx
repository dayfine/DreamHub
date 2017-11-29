import React, { Component }  from 'react'
import { connect } from 'react-redux'

import Setting from './UserSetting'

import Card, { CardContent, CardHeader } from 'material-ui/Card'

const UserCard = props => {
  const { user, goals } = props

  return (
    <div>
      <Card>
        <CardHeader title={user.name} />
        <CardContent>
          Email: {user.email}
          <br />
          {user.goalCount || goals.length} Goals
          <br />
          {user.friendCount && (
            <span>{user.friendCount} Friends</span>
          )}
          <br />
        </CardContent>
      </Card>
    </div>
  )
}

export default UserCard
