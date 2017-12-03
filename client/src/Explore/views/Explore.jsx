import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Card, { CardContent, CardActions } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import AutoCompleteGoal from '../../Goals/views/AutoCompleteGoal'
import GoalForm from '../../Goals/views/GoalForm'

import { mapCategoryToGoal } from '../../Goals/util/mappers'

const styles = {
  root: {
    flexGrow: 1
  },
  controlGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
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
                      aria-label='Open Details'
                      component={Link}
                      to={ `/goals/${goal.id}`}
                    >
                      <Icon>open_in_new</Icon>
                    </IconButton>
                  </div>
                  <div className={classes.controlGroup}>
                    <div>
                      {goal.category}
                    </div>
                  </div>
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
  goals: mapCategoryToGoal(state.categories, state.pastGoals)
})

export default connect(mapState)(
                withStyles(styles)(
                  GoalList
                ))
