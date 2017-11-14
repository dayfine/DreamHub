import React, { Component } from 'react'
import Card from './Card'

import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'

const Column = ({header, goals}) => {
  return (
    <Paper>
      <Typography type='headline' >
        {goals.length} goals
      </Typography>
      <Typography type='display1' >
        <div>{header}</div>
      </Typography>

      <Divider light />
      {goals.map(goal => {
        // console.log(goal)
        return (<Card key={goal.title} goal={goal} />)
      })}
    </Paper>
  )
}

export default Column
