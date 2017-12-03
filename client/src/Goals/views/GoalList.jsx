import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import Dialog from 'material-ui/Dialog'
import Grid from 'material-ui/Grid'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import AddTooltip from './AddTooltip'
import Resolution from './Resolution'
import ProperButton from '../../common/ProperButton'
import { views as Category } from '../../Category'

import { GOAL_PROGRESS } from '../../constants'
import { updateGoalProgress } from '../actions'
import { mapCategoryToGoal } from '../util/mappers'

const styles = {
  root: {
    flexGrow: 1,
    height: 'calc(100vh - 240px)'
  },
  overflow: {
    height: '100%',
    overflow: 'scroll',
    marginBottom: 50
  },
  controlGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pulse: {
    animation: 'pulse 1s infinite',
    border: '3px solid'
  },
  category: {
    alignSelf: 'flex-start'
  }
}

const RenderProgressHeader = ({ progress }) => {
  switch (progress) {
    case GOAL_PROGRESS.READY:
      return (<div style={{ background: '#00e676', height: 12 }} />)

    case GOAL_PROGRESS.ACCOMPLISHED:
      return (<div style={{ background: '#4f9b94', height: 12 }} />)

    case GOAL_PROGRESS.STALLED:
      return (<div style={{ background: '#d32f2f', height: 12 }} />)

    case GOAL_PROGRESS.ABANDONED:
      return (<div style={{ background: '#c85a54', height: 12 }} />)

    default:
      return (<div style={{ background: '#00bcd4', height: 12 }} />)
  }
}

const RenderProgressButton = ({ progress, classes, onClick, goalId }) => {
  switch (progress) {
    case GOAL_PROGRESS.READY:
      return (
        <ProperButton
          onClick={onClick.bind(null, goalId)}
          raised
          color='primary'
          className={classes.pulse}
        >
          {progress}
        </ProperButton>
      )

    case GOAL_PROGRESS.STALLED:
      return (
        <ProperButton
          component={Link}
          to={`/goals/${goalId}`}
          raised
          color='accent'
          className={classes.pulse}
        >
          {progress}
        </ProperButton>
      )

    default:
      return (<ProperButton disabled>{progress}</ProperButton>)
  }
}

class GoalList extends Component {
  state = {
    modalId: null
  }

  openModal = modalId => {
    this.setState({ modalId })
  }

  closeModal = () => {
    this.setState({ modalId: null })
  }

  componentDidMount () {
    this.props.updateGoalProgress()
  }

  render () {
    const { goals, categories, classes } = this.props
    const { modalId } = this.state

    return (
      <div className={classes.root}>
        <Dialog open={!!modalId}>
          <Resolution
            goal={goals.find(g=>g.id==modalId)}
            onClose={this.closeModal}
          />
        </Dialog>
        <Grid container className={classes.overflow}>
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
                      <div className={classes.category}>
                        <Category
                          category={categories.find(c => c.id === goal.categoryId)}
                          passIdBack={null}
                          goal={goal}
                        />
                      </div>
                      <RenderProgressButton
                        progress={goal.progress}
                        classes={classes}
                        onClick={this.openModal}
                        goalId={goal.id}
                      />
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
