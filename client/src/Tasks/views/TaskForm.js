import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTask, editTask } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false, currentTask: {} };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleDelete(ev) {
    ev.preventDefault();
    const { goalId, id } = this.props.task;
    this.props.removeTask(goalId, id);
  }

  // handles editing goal
  handleEdit(ev) {
    const { name, value } = ev.target;
    const currentTask = Object.assign({}, this.state.currentTask, { [ name ]: value });
    this.setState({ currentTask });
  }

  // handles saving edited goal
  handleSave(ev) {
    ev.preventDefault();
    this.props.editTask(this.state.currentTask);
    this.setState({ showForm: false });
  }

  render() {
    const { value, showForm, currentTask } = this.state;
    const { handleSubmit, handleChange, handleDelete, handleEdit, handleSave } = this;
    const { task } = this.props;

    return (
      <ul id="task-container">
        <li key={ task.id } className="task-item">
          {
            showForm && currentTask.id === task.id ? (
            <form onSubmit={ handleSave }>
              <input type="text" onChange={ handleEdit } name="title" value={ currentTask.title } autoFocus className="task-input-sm" /> <button className="btn btn-sm btn-success">Save</button> <button onClick={() => this.setState({ showForm: false }) } className="btn btn-sm btn-secondary">Cancel</button>
              <textarea onChange={ handleEdit } name="description" value={ currentTask.description || '' } className="task-input-sm task-textinput" />
              {/* TO DO: Need to be able to clear date */}
              <p>Due date: <input type="date" onChange={ handleEdit } name="dueDate" value={ currentTask.dueDate || '' } /></p>
              <div><label>Status</label>
                <select name="status" value={ currentTask.status } onChange={ handleEdit }>
                  <option value="Created">Created</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div><label>Priority</label>
                <select name="priority" value={ currentTask.priority } onChange={ handleEdit }>
                  <option value="Urgent">Urgent</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </form>
            ) : (
            <div>
              <p><span onClick={() =>  this.setState({ showForm: true, currentTask: task })} className="task-title">{ task.title } <button className="btn btn-sm btn-warning">Edit</button></span> <button onClick={ handleDelete } className="btn btn-sm btn-danger">Delete Task</button></p>
              <p onClick={() =>  this.setState({ showForm: true, currentTask: task })}>{ task.description }</p>
              <p>{ task.dueDate ? `Due date: ${ task.dueDate }` : null }</p>
              <p className="badge badge-dark">Priority: { task.priority }</p>
            </div>
            )
          }
        </li>
      </ul>
    )
  }
}

const mapStateToProps = ({ tasks }) => {
  return { tasks };
};

const mapDispatch = { removeTask, editTask };

export default connect(mapStateToProps, mapDispatch)(Form);
