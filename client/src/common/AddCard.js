import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createTask } from '../Tasks/actions'
import { createGoal } from '../Goals/actions'

class QuickAddForm extends Component {
  handleSubmit = ev => {
    console.log('wat?', this.props)
    ev.preventDefault();
    const { type, createTask, goalId } = this.props
    const title = ev.target.title.value

    if (type === 'task' ) {
      console.log('are we dispatching?', title)
      createTask({ goalId, title })
    }
  }

  render () {
    const { type, createTask, goalId } = this.props
    return (
      <form onSubmit={ this.handleSubmit }>
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
}

const mapDispatch = { createTask };

export default connect(null, mapDispatch)(QuickAddForm);
