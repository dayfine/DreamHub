import React from 'react'
import { connect } from 'react-redux'
import { Motion, spring } from 'react-motion'

import Grid from 'material-ui/Grid'
import Column from './Column'

import { STATUS } from '../../constants'

const Kanban = props => {
  const { goals } = props
  console.log(goals)
  return (
    <Grid container>
      {Object.values(STATUS).map(status => {
        return (
          <Grid item xs={4} key={status}>
            <Column header={status} goals={goals.status} />
          </Grid>
        )
      })}
    </Grid>
  )
}

const mapState = state => ({
  goals: state.goals  // fitler here
})

export default connect(mapState)(Kanban)
