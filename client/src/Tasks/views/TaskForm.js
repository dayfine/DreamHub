import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTask, editTask } from '../actions';

import Dialog from 'material-ui/Dialog'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'


import { TASK_STATUS, TASK_PRIORITY } from '../../constants'

class Form extends Component {
  constructor(props) {
    super()
    this.state = {
      currentTask: props.task
    }
  }

  handleEdit = ev => {
    const update = {}
    update[ev.target.name] = ev.target.value
    this.setState({
      currentTask: { ...this.state.currentTask, ...update },
    })
  }

  handleSave = ev => {
    const { editTask, onClose } = this.props
    editTask(this.state.currentTask);
    onClose()
  }

  render() {
    const { value, showForm, currentTask } = this.state;
    const { handleEdit, handleSave } = this;
    const { removeTask, open, onClose } = this.props;

    return (
      <Dialog
        open={open}
        onRequestClose={onClose}
      >
        <div className="task-item">
          <input
            type="text"
            onChange={ handleEdit }
            name="title"
            value={ currentTask.title }
            autoFocus
            className="task-input-sm" />

          <IconButton
            onClick={ handleSave }
            aria-label='Save'>
            <Icon>done</Icon>
          </IconButton>

          <IconButton
            onClick={ onClose }
            aria-label='Save'>
            <Icon>block</Icon>
          </IconButton>

          <textarea
            onChange={ handleEdit }
            name="description"
            value={ currentTask.description || '' }
            className="task-input-sm task-textinput" />

          <div>Due date:
            {/* TO DO: Need to be able to clear date */}
            <input
              type="date"
              onChange={ handleEdit }
              name="dueDate"
              value={ currentTask.dueDate || '' } />
          </div>

          <div>
            <label>Status</label>
            <select name="status" value={ currentTask.status } onChange={ handleEdit }>
            {Object.values(TASK_STATUS).map(status => {
              return (<option value={status} key={status}>{status}</option>)
            })}
            </select>
          </div>

          <div>
            <label>Priority</label>
            <select name="priority" value={ currentTask.priority } onChange={ handleEdit }>
            {Object.values(TASK_PRIORITY).map(status => {
              return (<option value={status} key={status}>{status}</option>)
            })}
            </select>
          </div>
        </div>
      </Dialog>
    )
  }
}

const mapDispatch = { removeTask, editTask };

export default connect(null, mapDispatch)(Form);
