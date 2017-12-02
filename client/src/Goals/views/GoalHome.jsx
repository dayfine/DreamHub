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
import { views as BubbleChart } from '../../Graph'

const styles = {
  goalContainer: {
    marginTop: '-30px',
    height: 'calc(100vh - 190px)',
    minWidth: 720,
    flex: 1
  },
  body: {
    height: '100%'
  },
  overflow: {
    padding: 16,
    height: 'calc(100% - 60px)',
    overflowY: 'scroll'
  }
}

const RenderTabContainer = props => {
  const { idx, goal, goalTasks } = props

  switch (idx) {
    case 0:
      return (<div>Goal Details</div>)

    case 1:
      return (<Kanban goalId={goal.id}/>)

    case 2:
      return (<GoalPanel goal={goal} goalTasks={goalTasks} />)

    case 3:
      return (<BubbleChart goalTasks={goalTasks} />)

    default:
      return (<div>Goal Details</div>)
  }
}

class GoalHome extends Component {
  state = {
    idx: 0,
  }

  handleChange = (ev, idx) => {
    this.setState({ idx });
  }

  handleChangeIndex = idx => {
    this.setState({ idx });
  }

  render () {
    const { goal, goalTasks, classes } = this.props

    return !goal ? (<div>Loading...</div>) : (
      <div className={classes.goalContainer}>
        <Typography type='display1' >
          { goal.title }
        </Typography>
        <Paper className={classes.body}>
          <AppBar position='relative' color='default'>
            <Tabs
              value={this.state.idx}
              onChange={this.handleChange}
              indicatorColor='primary'
              textColor='primary'
              fullWidth
              centered
            >
              <Tab label='Details' />
              <Tab label='Board' />
              <Tab label='List' />
              <Tab label='Chart' />
            </Tabs>
          </AppBar>
          <div className={classes.overflow}>
            <RenderTabContainer idx={this.state.idx} {...this.props} />
          </div>
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
