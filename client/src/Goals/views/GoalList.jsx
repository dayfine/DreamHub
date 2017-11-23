import React, { Component }  from 'react'
import { connect } from 'react-redux'

import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Card, { CardContent, CardActions } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import AddCard from '../../common/AddCard'
import GoalForm from './GoalForm'

class GoalList extends Component {
  constructor () {
    super()
    this.state = {
      modalId: null
    }
  }

  openModal = modalId => {
    this.setState({ modalId })
  }

  closeModal = () => {
    this.setState({ modalId: null })
  }

  render () {
    const { goals } = this.props
    const { modalId } = this.state
    return (
      <div id='container'>
        <GoalForm
          open={!!modalId}
          goalId={modalId}
          onClose={this.closeModal}
        />
        <AddCard type='goal' />
        <ul>
        {goals.map(goal => {
          return (
            <Card>
              <CardActions>
                <IconButton
                  onClick={this.openModal.bind(this, goal.id)}
                  aria-label='Edit'>
                  <Icon>mode_edit</Icon>
                </IconButton>
              </CardActions>

              <CardContent>
                <Typography type='display1'>
                  {goal.title}
                </Typography>
                {goal.description}
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
  goals: state.goals
})

export default connect(mapState)(GoalList)
