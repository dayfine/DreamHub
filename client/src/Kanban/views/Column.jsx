import React, { Component } from 'react'
import Card from './Card'

import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'

import { DropTarget } from 'react-dnd'
import { DragItemTypes } from '../../constants'

const columnTarget = {
  drop (props, monitor) {
    console.log(props)
    const status = props.header
    // props.moveCard(props.x, props.y)
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
})

const Column = props => {
  const { header, goals, connectDropTarget, isOver } = props
  return connectDropTarget(
    <div style={{height: '100%'}}>
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
    </div>
  )
}

const DropTargetComp = DropTarget(DragItemTypes.CARD, columnTarget, collect)(Column)

export default DropTargetComp
