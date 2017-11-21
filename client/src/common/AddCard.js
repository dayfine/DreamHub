import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createTask } from '../Tasks/actions'
import { createGoal } from '../Goals/actions'

const QuickAddForm = props => {
  const { type, createTask, createGoal, goalId, userId } = props

  const handleSubmit = ev => {
    ev.preventDefault();
    const title = ev.target.title.value

    if ( type === 'task' ) {
      createTask({ goalId, title })
    } else if ( type === 'goal' ) {
      createGoal(userId, title)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name='title'
        placeholder={ `Add new ${ type }...` }
        className="goal-input" />
      <button
        type="submit"
        className="btn btn-sm btn-primary">
        +
      </button>
    </form>
  )
}

const mapState = state => ({
  userId: state.currentUser.id
})

const mapDispatch = { createTask, createGoal };

export default connect(null, mapDispatch)(QuickAddForm);
