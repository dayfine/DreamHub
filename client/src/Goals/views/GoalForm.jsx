import React, { Component } from 'react'
import { connect } from 'react-redux'

import Dialog from 'material-ui/Dialog'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'

import { removeGoal, editGoal } from '../actions'

class GoalForm extends Component {
  constructor (props) {
    super()
    this.state = {
      goal: props.goal
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ goal: nextProps.goal })
  }

  handleEdit = ev => {
    const update = {}
    const { name, value } = ev.target
    update[name] = name === 'categoryId' ? (+value) : value

    this.setState({
      goal: { ...this.state.goal, ...update }
    })
  }

  handleSave = ev => {
    const { editGoal, userId, onClose } = this.props
    editGoal(this.state.goal, userId)
    onClose()
  }

  render () {
    const { categories, removeGoal, editGoal, open, onClose } = this.props
    const { goal } = this.state
    const { handleDelete, handleEdit, handleSave } = this

    return !goal ? (<div>Loading...</div>) : (
        <div className='goal-edit'>
          <input
            type='text'
            onChange={ handleEdit }
            name='title'
            value={goal.title}
            autoFocus
            className='goal-input-sm' />

          <button
            onClick={ handleSave }
            className='btn btn-sm btn-success'>
            Save
          </button>

          <button
            onClick={ onClose }
            className='btn btn-sm btn-secondary'>
            Cancel
          </button>

          <div>
            <label>Category</label>
            <select name="categoryId" value={ goal.categoryId } onChange={ handleEdit }>
              <option value={''}>Choose a category...</option>
              {categories.map(category => {
                return (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>)
              })}
            </select>
          </div>

          <textarea
            onChange={ handleEdit }
            name='description'
            value={goal.description || ''}
            className='goal-input-sm goal-textinput' />
        </div>
    )
  }
}

const mapState = state => ({ categories: state.categories })
const mapDispatch = { removeGoal, editGoal }

export default connect(mapState, mapDispatch)(GoalForm)
