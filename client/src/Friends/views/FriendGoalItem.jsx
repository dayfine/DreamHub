import React from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Button from '../../common/ProperButton'

const FriendGoalItem = props => {
  const { goal } = props
  console.log(goal)
  const goalProgress = goal.progress
  let progressButton = ''
  switch(goalProgress){
    case 'Accomplished':
      progressButton = <Button raised dense color='primary'>Congrats!</Button>;
      break;
    case 'Stalled':
      progressButton = <Button raised dense color='accent'>Don't give up!</Button>;
      break;Button
    default:
      progressButton = <Button raised dense color='primary'>Looking good</Button>;
      break;
  }

  return (
    <div>
      <Typography type='subheading'>
        {goal.title}
      </Typography>
      <Typography type='body2'>
        {goal.description}
      </Typography>
      <Typography type='body2'>
        {goal.progress}
      </Typography>
      {progressButton}
    </div>
  )
}

export default FriendGoalItem
