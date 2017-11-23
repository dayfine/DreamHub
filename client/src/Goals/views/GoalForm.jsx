import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

import Dialog from 'material-ui/Dialog'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'

import { removeGoal, editGoal } from '../actions'

class GoalForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showForm: false,
      currentGoal: props.goal
    }
  }

  handleDelete = id => {
    this.props.removeGoal(id)
  }

  handleEdit = ev => {
    const { name, value } = ev.target
    const currentGoal = Object.assign({}, this.state.currentGoal, { [ name ]: value })
    this.setState({ currentGoal })
  }

  handleSave = ev => {
    ev.preventDefault()
    this.props.editGoal(this.state.currentGoal, this.props.userId)
    this.setState({ showForm: false })
  }

  render () {
    const { goal, removeGoal, editGoal, open, onClose } = this.props
    const { currentGoal } = this.state
    const { handleDelete, handleEdit, handleSave } = this
    console.log(goal, currentGoal)

    return (
      <Dialog
        open={open}
        onRequestClose={onClose}
      >
      <div className='goal-item'>
       {
        // <form onSubmit={handleSave} className='goal-edit'>
        //   <input
        //     type='text'
        //     onChange={handleEdit}
        //     name='title'
        //     value={currentGoal.title}
        //     autoFocus
        //     className='goal-input-sm' />
        //   <button className='btn btn-sm btn-success'>Save</button>
        //   <button
        //     onClick={() => this.setState({ showForm: false })}
        //     className='btn btn-sm btn-secondary'>Cancel</button>
        //   <textarea
        //     onChange={handleEdit}
        //     name='description'
        //     value={currentGoal.description || ''}
        //     className='goal-input-sm goal-textinput' />
        // </form>

        // <div>
        //   <p>
        //     <span
        //       onClick={() => this.setState({ showForm: true, currentGoal: goal })}
        //       className='goal-title'>
        //       { goal.title }
        //       <button className='btn btn-sm btn-warning'>Edit</button>
        //     </span>
        //     <button
        //       onClick={handleDelete.bind(this, goal.id)}
        //       className='btn btn-sm btn-danger'>Delete Goal</button>
        //   </p>
        //   <p onClick={() => this.setState({ showForm: true, currentGoal: goal })}>{ goal.description }</p>
        //   {/* TODO: fetch the Kanban board for this goal id */}
        //   <Link to={`/kanban/${goal.id}`}>See progress on Kanban board</Link>
        //   <br />
        //   <Link to={`/goals/${goal.id}`}>See Details</Link>
        // </div>
      }
      </div>
    </Dialog>
    )
  }
}

const mapState = (state, ownProps) => {
  const { goalId } = ownProps
  console.log(goalId)
  return {
    goal: state.goals.find(g => g.id === +goalId),
    goalTasks: state.tasks.filter(t => t.goalId === +goalId)
  }
}

const mapDispatch = { removeGoal, editGoal }

export default connect(null, mapDispatch)(GoalForm)
