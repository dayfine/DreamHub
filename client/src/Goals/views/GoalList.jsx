import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import AddTooltip from './AddTooltip'

import ProperButton from '../../common/ProperButton'
import { GOAL_PROGRESS } from '../../constants'
import { updateGoalProgress } from '../actions'
import { mapCategoryToGoal } from '../util/mappers'

const styles = {
  root: {
    flexGrow: 1
  },
  controlGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pulse: {
    animation: 'pulse 2s infinite',
    border: '3px solid'
  }
}

const RenderCategoryDot = ({ goal, categories }) => {
  const cat = categories.find(c => c.id === goal.categoryId)
  const color = cat ? cat.color : '#000'

  return (
    <Icon style={{ color }}>fiber_manual_record</Icon>
  )
}

const RenderProgressHeader = ({ progress }) => {
  let backgroundColor
  switch (progress) {
    case GOAL_PROGRESS.READY:
      backgroundColor = '#00e676'; break
    case GOAL_PROGRESS.ACCOMPLISHED:
      backgroundColor = '#4f9b94'; break
    case GOAL_PROGRESS.STALLED:
      backgroundColor = '#d32f2f'; break
    case GOAL_PROGRESS.ABANDONED:
      backgroundColor = '#c85a54'; break
    default:
      backgroundColor = '#00bcd4'
  }
  return (
    <div style={{ backgroundColor, height: 12 }} />
  )
}

const RenderProgressButton = ({ progress, classes }) => {
  return (
    <ProperButton
      className={progress === GOAL_PROGRESS.STALLED
                  ? classes.pulse : ''}>
      {progress}
    </ProperButton>
  )
}

class GoalList extends Component {
  componentDidMount () {
    this.props.updateGoalProgress()
  }

  render () {
    const { goals, categories, classes } = this.props

    return (
      <div className={classes.root}>
        <Grid container>
          {goals.map(goal => {
            return (
              <Grid item sm={6} md={4} key={goal.id}>
                <Card>
                  <RenderProgressHeader progress={goal.progress} />
                  <CardContent>
                    <div className={classes.controlGroup}>
                      <Typography type='headline'>
                        {goal.title}
                      </Typography>

                      <IconButton
                        aria-label='Open Details'
                        component={Link}
                        to={`/goals/${goal.id}`}
                      >
                        <Icon>open_in_new</Icon>
                      </IconButton>
                    </div>
                    <div className={classes.controlGroup}>
                      <div className={classes.controlGroup}>
                        {goal.category}
                        <RenderCategoryDot goal={goal} categories={categories} />
                      </div>
                      <RenderProgressButton progress={goal.progress} classes={classes} />
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
        <AddTooltip />
      </div>
    )
  }
}

const mapState = state => ({
  goals: mapCategoryToGoal(state.categories, state.goals),
  categories: state.categories
})

const mapDispatch = ({ updateGoalProgress })

export default connect(mapState, mapDispatch)(
                withStyles(styles)(
                  GoalList
                ))
