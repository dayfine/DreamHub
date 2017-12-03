import React from 'react'
import { connect } from 'react-redux'

import Grid from 'material-ui/Grid'
import Divider from 'material-ui/Divider'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import List, { ListItem } from 'material-ui/List'
import green from 'material-ui/colors/green'
import Checkbox from 'material-ui/Checkbox'

import GoalForm from './GoalForm'
import { TASK_STATUS } from '../../constants'
import { editTask } from '../../Tasks/actions'
import { truncate } from '../../Tasks/util/helpers'

const styles = {
  checked: {
    color: green[500]
  },
  flexCard: {
    display: 'flex',
    padding: 20,
    borderBottom: '1px solid #ccc'
  },
  flex: {
    flex: '1 0 auto'
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
    <Grid container spacing={24} justify='space-between'>
      <Grid item xs={4}>
        <GoalForm goal={goal} />
      </Grid>
      <Grid item xs={6}>
        <List>
          {goalTasks.map(task => {
            return (
              <ListItem key={task.id}>
                <Grid container className={classes.flexCard}>
                  <Grid item xs={8} direction='column'>
                    <Typography type='subheading'>
                      {truncate(task.title, 20)}
                    </Typography>
                    <Typography type='caption' color='secondary'>
                      {truncate(task.description, 60)}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} direction='column' justify='flex-start'>
                    <div className='badge badge-dark'>Due Date:</div>
                    { task.dueDate || 'N/A' }
                    <div className='badge badge-dark'>Priority:</div>
                    { task.priorityText }
                  </Grid>
                  <Grid item xs={1}>
                    <Checkbox
                      checked={task.status === COMPLETED}
                      onChange={toggleStatus.bind(this, task.id)}
                      className={classes.checked}
                    />
                  </Grid>
                </Grid>
              </ListItem>
            )
          })}
        </List>
      </Grid>
    </Grid>
  )
}

const mapDispatch = ({ editTask })

export default connect(null, mapDispatch)(
                withStyles(styles)(
                  GoalPanel
                ))
