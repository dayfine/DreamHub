import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Card, { CardContent, CardActions } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import AutoCompleteGoal from './AutoCompleteGoal'
import AddCard from '../../common/AddCard'
import GoalForm from './GoalForm'

import { mapCategoryToGoal } from '../util/mappers'

const styles = {
  title: {
    display: 'flex',
    padding: 24,
    flexDirection: 'column',
    color: 'white',
    backgroundColor: 'black'
  },
  flexCard: {
    display: 'flex',
  },
  goalInfo: {
    width: 160,
    height: 140
  },
  flex: {
    flex: '1 0 auto',
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

  render () {
    const { goals, categories } = this.props
    const { modalId } = this.state

    const goal = goals.find(g => g.id === modalId)

    return (
      <div id='container'>
        <GoalForm
          open={!!modalId}
          goal={goal}
          onClose={this.closeModal}
        />

        <AutoCompleteGoal />
        <AddCard type='goal' />
        <ul>
        {goals.map(goal => {
          return (
            <Card key={goal.id}>
              <CardContent>
                <div>
                  <Typography type='display1'>
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
                <Link to={ `/kanban/${goal.id}`}>See progress on Kanban board</Link>
                <br />
                <Link to={ `/goals/${goal.id}`}>See Details</Link>
              </CardContent>
            </Card>
          )
        })}
        </ul>
      </div>
    )
  }
}

const mapState = state => ({
  goals: mapCategoryToGoal(state.categories, state.goals)
})

export default  connect(mapState)(
                withStyles(styles)(
                  GoalList
                ))
