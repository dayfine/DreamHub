import React, { Component }  from 'react'
import { connect } from 'react-redux'

import Setting from './UserSetting'

import { withStyles } from 'material-ui/styles'
import Card, { CardMedia, CardContent, CardHeader } from 'material-ui/Card'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

const UserCard = props => {
  const { user, goals, classes } = props
  return (
    <div>
      <Card>
        <CardMedia
          className={classes.media}
          image={`/public/images/${user.imageUrl}`}
          title='User Profile'
        />
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

export default withStyles(styles)(UserCard)
