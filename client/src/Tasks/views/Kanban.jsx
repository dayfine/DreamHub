import React from 'react'
import { connect } from 'react-redux'

import Grid from 'material-ui/Grid'
import Column from './Column'
import QuickAddTask from './QuickAddTask'

import { GoalTaskMapper } from '../util/mappers'

import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

// Main view. Module Entry Point
const Kanban = props => {
  const { goalId, tasks } = props
  return (
    <div style={{width: '100%', padding: 20}}>
      <QuickAddTask goalId={goalId} />
      <Grid container style={{height: 'calc(100vh - 80px)'}} spacing={24}>
        {tasks.map(([status, tasks]) => {
          return (
            <Grid item xs={3} key={status}>
              <Column header={status} tasks={tasks} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

const mapState = (state, ownProps) => {
  const { goalId } = ownProps.match.params
  return {
    goalId: goalId,
    tasks: Object.entries(GoalTaskMapper(state.tasks, +goalId))
  }
}

export default  DragDropContext(HTML5Backend)(
                connect(mapState)(
                  Kanban
                ))
