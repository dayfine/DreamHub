import React from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'

const FriendGoalItem = props => {
  const { goal } = props
  return (
    <Paper>
      <Typography type='subheading'>
        {goal.title}
      </Typography>
      <Typography type='body2'>
        {goal.description}
      </Typography>
      <Typography type='body2'>
        {goal.progress}
      </Typography>
    </Paper>
  )
}

export default FriendGoalItem
