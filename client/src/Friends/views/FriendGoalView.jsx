import React from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Divider from 'material-ui/Divider'

import FriendGoalItem from './FriendGoalItem'

const FriendGoalView = props => {
  const { friend } = props
  if(friend){
    return (
      <Card>
        <CardContent>
        <h4>{friend.name}'s Goals</h4>
        <Divider />
        {friend.goals.map(goal => {
           return (
            <div>
              <FriendGoalItem goal={goal} />
              <Divider />
            </div>
           )
         })}
        </CardContent>
      </Card>
    )
  }
  else{
    return (<div></div>)
  }
}

export default FriendGoalView
