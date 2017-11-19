import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import { views as TaskForm } from '../../Tasks'

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

const AgileCard = props => {
  const { classes, task, connectDragSource, isDragging } = props
  return connectDragSource(
    <div>
      <TaskForm task={task} />
      {/*<Card className={classes.agileCard}>
        <CardHeader title={goal.title} />
        <CardContent>
          {JSON.stringify(goal.tasks)}
        </CardContent>
      </Card>*/}
    </div>
  )
}

const mapState = state => ({
  timer: state.timer
})

const StyledComponent = withStyles(styles)(AgileCard)
const DragComponent = DragSource(DragItemTypes.CARD, cardSource, collect)(StyledComponent)

export default connect(mapState)(DragComponent)
