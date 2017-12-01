import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Card, { CardContent, CardActions } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import AutoCompleteGoal from './AutoCompleteGoal'
import GoalForm from './GoalForm'

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
  // topRightControl: {

  // }
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

  render () {
    const { goals, categories, classes } = this.props
    const { modalId } = this.state

    const goal = goals.find(g => g.id === modalId)

    return (
      <div className={classes.root}>
        <GoalForm
          open={!!modalId}
          goal={goal}
          onClose={this.closeModal}
        />
        <AutoCompleteGoal />
        <Grid container>

        {goals.map(goal => {
          return (
            <Grid item sm={6} md={4}  key={goal.id}>
              <Card>
                <CardContent>
                  <div className={classes.controlGroup}>
                    <Typography type='headline'>
                      {goal.title}
                    </Typography>
                    <IconButton
                      onClick={this.openModal.bind(this, goal.id)}
                      aria-label='Edit'>
                      <Icon>mode_edit</Icon>
                    </IconButton>
                  </div>
                  {goal.category}
                  <br />
                  {goal.description}
                  <br />
                  <Link to={ `/kanban/${goal.id}`}>Track progress</Link>
                  <br />
                  <Link to={ `/goals/${goal.id}`}>See Details</Link>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
        </Grid>
      </div>
    )
  }
}

const mapState = state => ({
  goals: mapCategoryToGoal(state.categories, state.goals)
})

export default connect(mapState)(
                withStyles(styles)(
                  GoalList
                ))
