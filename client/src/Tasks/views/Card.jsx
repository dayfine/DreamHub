import React, { Component } from 'react'
import { connect } from 'react-redux'

import TaskForm from './TaskForm'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardActions } from 'material-ui/Card'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'


import { DragSource } from 'react-dnd'
import { DragItemTypes } from '../../constants'

import { removeTask } from '../actions'
import { truncate } from '../util/helpers'

const styles = {
  agileCard: {
    margin: 5
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px 8px 16px'
  }
}

const cardSource = {
  beginDrag (props) {
    return props.task
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})

// Used by Column, Kanban
class AgileCard extends Component {
  constructor () {
    super()
    this.state = {
      modalOpen: false
    }
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  render () {
    const { openModal, closeModal } = this
    const { classes, task, removeTask, connectDragSource } = this.props

    return connectDragSource(
      <div>
        <TaskForm
          task={task}
          open={this.state.modalOpen}
          onClose={closeModal}
        />
        <Card className={classes.agileCard}>
          <CardContent>
            <Typography type='title'>
              {truncate(task.title, 20)}
            </Typography>
            <Typography type='caption'>
              {truncate(task.description, 60)}
            </Typography>
          </CardContent>
          <div className={classes.flexContainer}>
            <div>
              <div>{ task.dueDate ? `Due date: ${ task.dueDate }` : null }</div>
              <div className="badge badge-dark">Priority: {task.priority}</div>
            </div>
            <IconButton
              onClick={openModal}
              aria-label='Edit'>
              <Icon>mode_edit</Icon>
            </IconButton>
          </div>
        </Card>
      </div>
    )
  }
}

const mapDispatch = { removeTask };

export default  connect(null, mapDispatch)(
                withStyles(styles)(
                DragSource(DragItemTypes.CARD, cardSource, collect)(
                  AgileCard
                )))
