import React, { Component } from 'react'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import green from 'material-ui/colors/green'
import Checkbox from 'material-ui/Checkbox'

import { TASK_STATUS } from '../../constants'
import { editTask } from '../../Tasks/actions'

const styles = {
  checked: {
    color: green[500]
  }
}

const GoalPanel = props => {
  // Expects tasks to be calculated and passed along
  const { tasks, classes, editTask } = props
  const { COMPLETED, CREATED } = TASK_STATUS

  const toggleStatus = (taskId) => {
    const task = tasks.find(t => t.id === taskId)
    const newStatus = task.status === COMPLETED ? CREATED : COMPLETED
    editTask({...task, status: newStatus})
  }

  return (
    <Paper>
      <Typography type='display1' >
        Have you worked on any of the following goal?
      </Typography>
      <ol>
        { tasks && tasks.map(task => {
          return (
            <li key={task.id}>
              Title: { task.title }
              <br />
              Status: { task.status }
              <Divider light />
              <Checkbox
                checked={task.status === COMPLETED}
                onChange={toggleStatus.bind(this, task.id)}
                className={classes.checked}
              />
            </li>
          )
        })}
      </ol>
    </Paper>
  )
}

const mapDispatch = ({ editTask })

export default connect(null, mapDispatch)(
                withStyles(styles)(
                  GoalPanel
                ))
