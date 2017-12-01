import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import Tabs, { Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import Typography from 'material-ui/Typography'

import { TASK_STATUS } from '../../constants'
import { editTask } from '../../Tasks/actions'

import Kanban from '../../Tasks/views/Kanban'
import GoalPanel from './GoalPanel'

const styles = {}

const TabContainer = props => {
  return (
    <div style={{ padding: 8 * 3 }}>
      {props.children}
    </div>
  )
}

class GoalHome extends Component {
  state = {
    value: 0,
  }

  handleChange = (ev, value) => {
    this.setState({ value });
  }

  handleChangeIndex = index => {
    this.setState({ value: index });
  }

  render () {
    const { goal, goalTasks, classes } = this.props

    return !goal ? (<div>Loading...</div>) : (
      <div>
        <Typography type='display1' >
          { goal.title }
        </Typography>
        <Paper>
          <AppBar position='relative' color='default'>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor='primary'
              textColor='primary'
              fullWidth
              centered
            >
              <Tab label='Board' />
              <Tab label='List' />
              <Tab label='Item Three' />
            </Tabs>
          </AppBar>
          <SwipeableViews
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer>
              <Kanban goalId={goal.id}/>
            </TabContainer>
            <TabContainer>
              <GoalPanel goal={goal} goalTasks={goalTasks} />
            </TabContainer>
            <TabContainer>Item Three</TabContainer>
          </SwipeableViews>
        </Paper>
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  const { goalId } = ownProps.match.params
  return {
    goal: state.goals.find(g => g.id === +goalId),
    goalTasks: state.tasks.filter(t => t.goalId === +goalId)
  }
}

const mapDispatch = ({ editTask })

export default connect(mapState, mapDispatch)(
                withStyles(styles)(
                  GoalHome
                ))
