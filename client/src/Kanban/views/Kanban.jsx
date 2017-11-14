import React from 'react'
import { connect } from 'react-redux'
import { Motion, spring } from 'react-motion'

import Grid from 'material-ui/Grid'
import Column from './Column'

import { STATUS } from '../../constants'
import { goalMapper } from '../util/mappers'

const Kanban = props => {
  const { goalEntries } = props

  return (
    <Grid container style={{height: 'calc(100vh - 90px)'}}>
      {goalEntries.map(([status, goals]) => {
        return (
          <Grid item xs={3} key={status}>
            <Column header={status} goals={goals} />
          </Grid>
        )
      })}
    </Grid>
  )
}

const mapState = state => ({
  goalEntries: Object.entries(goalMapper(state.goals))  // fitler here
})

export default connect(mapState)(Kanban)
