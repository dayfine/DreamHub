import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import AutoCompleteGoal from './AutoCompleteGoal'

import ProperButton from '../../common/ProperButton'

import { removeGoal, editGoal } from '../actions'

const initialState = {
  title: '',
  description: '',
  progress: '',
  budget: 0,
  deadline: null,
  importance: 5,
  measurement: '',
  reasons: '',
  affirmations: '',
}

const styles = {
  formContainer: {
    padding: 24,
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

const RenderButtonGroups = props => {

}

class GoalForm extends Component {
  constructor (props) {
    super()
    this.state = initialState
  }

  componentDidMount () {
    if (this.props.goal) this.setState({ ...this.props.goal })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ goal: nextProps.goal })
  }

  handleEdit = ev => {
    let { name, value } = ev.target
    value = name === 'categoryId' ? (+value) : value

    this.setState({ name: value })
  }

  handleSave = ev => {
    const { editGoal, userId, onClose } = this.props
    editGoal(this.state.goal, userId)
    onClose()
  }

  render () {
    const { classes, removeGoal, editGoal, open, onClose } = this.props

    return (
      <div className={classes.formContainer}>
        {Object.keys(initialState).map(prop => {
          return (
            <TextField
              label={prop}
              onChange={ this.handleEdit }
              name={prop}
              value={this.state[prop]}
            />
          )
        })}
        <div>
          <ProperButton
            onClick={ this.handleSave }
          >
            Save
          </ProperButton>
          <ProperButton
            onClick={ onClose }
          >
            Cancel
          </ProperButton>
          <ProperButton
            onClick={ this.onClose }
          >
            Delete
          </ProperButton>
        </div>
      </div>
    )
  }
}

const mapState = state => ({})
const mapDispatch = { removeGoal, editGoal }

export default connect(mapState, mapDispatch)(
                withStyles(styles)(
                  GoalForm
                ))
