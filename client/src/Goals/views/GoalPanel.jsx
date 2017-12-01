import React, { Component } from 'react'
import { connect } from 'react-redux'

import CenterPaper from '../../common/CenterPaper'
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
  const { goal, goalTasks, classes, editTask } = props
  const { COMPLETED, CREATED } = TASK_STATUS

  const toggleStatus = (taskId) => {
    const task = goalTasks.find(t => t.id === taskId)
    const newStatus = task.status === COMPLETED ? CREATED : COMPLETED
    editTask({...task, status: newStatus})
  }

  return !goal ? (<div>Loading...</div>) : (
    <CenterPaper>
      <Typography type='headline' >
        { goal.title }
      </Typography>
      <Typography type='display1' >
        { goal.description }
      </Typography>
      <Divider light />
      <ol>
        { goalTasks.map(task => {
          return (
            <li key={task.id}>
              Title: { task.title }
              <br />
              Description: { task.description }
              <br />
              Due Date: { task.dueDate }
              <br />
              Priority: { task.priority }
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
    </CenterPaper>
  )
}

// const mapState = (state, ownProps) => {
//   const { goalId } = ownProps.match.params
//   return {
//     goal: state.goals.find(g => g.id === +goalId),
//     goalTasks: state.tasks.filter(t => t.goalId === +goalId)
//   }
// }

const mapDispatch = ({ editTask })

export default connect(null, mapDispatch)(
                withStyles(styles)(
                  GoalPanel
                ))
