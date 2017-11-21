import React from 'react'

import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import TaskForm from './TaskForm'

import { DragSource } from 'react-dnd'
import { DragItemTypes } from '../../constants'

const styles = {
  agileCard: {
    margin: 5
  }
}

const cardSource = {
  beginDrag (props) {
    console.log('source Prop', props)
    return props.task
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})

// Drag Container for Single TaskForm Component
const AgileCard = props => {
  const { classes, task, connectDragSource } = props
  return connectDragSource(
    <div>
      <Card className={classes.agileCard}>
        <CardHeader title={task.title} />
        <CardContent>
          <TaskForm task={task} />
        </CardContent>
      </Card>
    </div>
  )
}

export default  withStyles(styles)(
                DragSource(DragItemTypes.CARD, cardSource, collect)(
                  AgileCard
                ))
