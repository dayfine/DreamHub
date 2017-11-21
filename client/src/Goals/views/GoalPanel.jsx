import React, { Component } from 'react'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'

const GoalPanel = props => {
  const { goal } = props
  console.log(goal)

  return (
    <Paper>
      <Typography type='headline' >
        {goal.title}
      </Typography>
      <Typography type='display1' >
        {goal.description}
      </Typography>
      <Divider light />
      <ol>
      {goal.tasks && goal.tasks.map(task => {
        return (
          <li key={task.id}>
            Title: {task.title}
            <br />
            Description: {task.description}
            <br />
            Due Date: {task.dueDate}
            <br />
            Priority: {task.priority}
            <br />
            Status: {task.status}
            <Divider light />
          </li>
        )
      })}
      </ol>
    </Paper>
  )
}

const mapState = (state, ownProps) => {
  const { goalId } = ownProps.match.params
  console.log(goalId)
  return {
    goal: state.goals.find(g => g.id === +goalId)
  }
}

const mapDispatch = ({ })

export default connect(mapState, mapDispatch)(GoalPanel)
