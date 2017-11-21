import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTask, editTask } from '../actions';

import { TASK_STATUS, TASK_PRIORITY } from '../../constants'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      showForm: false,
      currentTask: {}
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
    ev.preventDefault();
    this.props.editTask(this.state.currentTask, this.props.goalId);
    this.setState({ showForm: false });
  }

  render() {
    const { value, showForm, currentTask } = this.state;
    const { handleEdit, handleSave } = this;
    const { task, removeTask } = this.props;

    return (
      <div key={ task.id } className="task-item">
        {showForm && currentTask.id === task.id ? (
          <form onSubmit={ handleSave }>
            <input
              type="text"
              onChange={ handleEdit }
              name="title"
              value={ currentTask.title }
              autoFocus
              className="task-input-sm" />
            <button className="btn btn-sm btn-success">Save</button>
            <button
              onClick={() => this.setState({ showForm: false }) }
              className="btn btn-sm btn-secondary">Cancel</button>
            <textarea
              onChange={ handleEdit }
              name="description"
              value={ currentTask.description || '' }
              className="task-input-sm task-textinput" />
            {/* TO DO: Need to be able to clear date */}
            <p>Due date:
              <input
                type="date"
                onChange={ handleEdit }
                name="dueDate"
                value={ currentTask.dueDate || '' } />
            </p>
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
          </form>
          ) : (
          <div>
            <div>
              <span
                onClick={() => this.setState({ showForm: true, currentTask: task })}
                className="task-title">
                { task.title }
                <button className="btn btn-sm btn-warning">Edit
                </button>
              </span>
              <button
                onClick={removeTask.bind(this, task.goalId, task.id)}
                className="btn btn-sm btn-danger">
                Delete Task
              </button>
              </div>
            <div
              onClick={() => this.setState({ showForm: true, currentTask: task })}>
              { task.description }
            </div>
            <div>{ task.dueDate ? `Due date: ${ task.dueDate }` : null }</div>
            <div className="badge badge-dark">Priority: { task.priority }</div>
          </div>
          )
        }
      </div>
    )
  }
}

const mapDispatch = { removeTask, editTask };

export default connect(null, mapDispatch)(Form);
