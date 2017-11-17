import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Motion, spring } from 'react-motion'

import Grid from 'material-ui/Grid'
import Column from './Column'
import { goalMapper } from '../util/mappers'

import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class Kanban extends Component {
  render () {
    const { goalEntries } = this.props
    return (
      <Grid container style={{height: 'calc(100vh - 80px)'}}>
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
}

const mapState = state => ({
  goalEntries: Object.entries(goalMapper(state.cards))  // fitler here
})

const DragContext = DragDropContext(HTML5Backend)(Kanban)

export default connect(mapState)(DragContext)
