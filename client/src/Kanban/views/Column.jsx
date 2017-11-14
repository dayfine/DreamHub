import React, { Component } from 'react'
import Card from './Card'

import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'

const Column = ({header, goals}) => {
  return (
    <Paper style={{backgroundColor: '#eee', height: '100%'}}>
      <div style={{padding: 10}}>
        <Typography type='headline' >
          {goals.length} goals
        </Typography>
        <Typography type='display1' >
          <div>{header}</div>
        </Typography>
      </div>
      <Divider light />
      {goals.map(goal => {
        return (<Card key={goal.title} goal={goal} />)
      })}
    </Paper>
  )
}

export default Column
