import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import ProperButton from '../../common/ProperButton'

import { createGoal, removeGoal, editGoal } from '../actions'

const initialState = {
  title: '',
  description: '',
  progress: '',
  budget: 0,
  deadline: '',
  importance: 5,
  measurement: '',
  reasons: '',
  affirmations: '',
}

class GoalForm extends Component {
  constructor (props) {
    super()
    this.state = {
      goal: initialState,
      showSuccess: false
    }
  }

  componentDidMount () {
    if (this.props.goal) this.setState({ goal: this.props.goal })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ goal: nextProps.goal })
  }

  handleEdit = ev => {
    let { name, value } = ev.target
    value = name === 'categoryId' ? (+value) : value
    const update = { [name]: value }

    this.setState({ goal: { ...this.state.goal, ...update } })
  }

  handleClick = type => ev => {
    ev.preventDefault()
    const { goal } = this.state
    const { createGoal, removeGoal, editGoal, userId, onClose } = this.props

    switch (type) {
      case 'add':
        createGoal({ ...goal, userId })
        return onClose()

      case 'cancel':
        return onClose()

      case 'update':
        return editGoal(goal)

      case 'delete':
        return removeGoal(goal.id)

      default:
        return
    }
  }

  render () {
    const { classes } = this.props
    const newForm = !this.state.goal.id

    return (
      <form
        className={ classes.formContainer }
        onSubmit={ this.handleClick(newForm ? 'add' : 'update') }
      >
        {Object.keys(initialState).map(prop => {
          const type = prop === 'deadline' ? 'date' : 'text'
          return (
            <TextField
              key={prop}
              label={prop}
              type={type}
              onChange={this.handleEdit}
              name={prop}
              fullWidth
              value={this.state.goal[prop]}
              required={prop==='title' || prop === 'deadline'}
            />
          )
        })}
        <div>
          <ProperButton type='submit'>
            { newForm ? 'Add' : 'Save' }
          </ProperButton>
          <ProperButton onClick={ this.handleClick(newForm ? 'cancel': 'delete') }>
            { newForm ? 'Cancel' : 'Delete' }
          </ProperButton>
        </div>
        {this.state.showSuccess && <strong>Change successful!</strong>}
      </form>

    )
  }
}

const styles = {
  formContainer: {
    padding: '24px 36px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: 320,
    maxHeight: 720,
    minWidth: 400,
    maxWidth: 960,
    overflow: 'scroll',
  }
}

const mapState = state => ({
  userId: state.currentUser.id,
})
const mapDispatch = ({ createGoal, removeGoal, editGoal })

export default connect(mapState, mapDispatch)(
                withStyles(styles)(
                  GoalForm
                ))
