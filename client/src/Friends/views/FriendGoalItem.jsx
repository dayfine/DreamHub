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
    <div style={{maxHeight:'200px'}}>
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>{goal.title}</h5>
              <h6>{goal.description}</h6>
            </div>
            <div className="col">
              <div>
                <i>Status: {goal.progress}</i>
              </div>
              <div>
                {progressButton}
              </div>
            </div>
          </div>
        </div>
        <br /><br />
    </div>
  )
}

export default FriendGoalItem
