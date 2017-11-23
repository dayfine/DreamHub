import React, { Component }  from 'react'
import { connect } from 'react-redux'

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
              <span key={goal.id}>{goal.title}</span>
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
