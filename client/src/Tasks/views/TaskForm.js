import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTask, removeTask, editTask } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', showForm: false, currentTask: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(ev) {
    this.setState({ value: ev.target.value });
  }

  // handles adding new goal
  handleSubmit(ev) {
    ev.preventDefault();
    this.props.createTask(this.props.goalId, this.state.value);
    this.setState({ value: '' });
  }

  handleDelete(id) {
    this.props.removeTask(id * 1);
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
    this.props.editTask(this.state.currentTask, this.props.goalId);
    this.setState({ showForm: false });
  }

  render() {
    const { value, showForm, currentTask } = this.state;
    const { handleSubmit, handleChange, handleDelete, handleEdit, handleSave } = this;
    const { tasks } = this.props;

    return (
      <div id="container">
        <form onSubmit={ handleSubmit }>
          <input type="text" value={ value } onChange={ handleChange } placeholder="Add new task..." className="goal-input" />
          <button type="submit" className="btn btn-sm btn-primary">+</button>
        </form>
        <ul>
          {
            tasks.map(task => {
              return (
                <li key={ task.id } className="goal-item">
                  {
                    showForm && currentTask.id === task.id ? (
                    <form onSubmit={ handleSave } className="goal-edit">
                      <input type="text" onChange={ handleEdit } name="title" value={ currentTask.title } autoFocus className="goal-input-sm" /> <button className="btn btn-sm btn-success">Save</button> <button onClick={() => this.setState({ showForm: false }) } className="btn btn-sm btn-secondary">Cancel</button>
                      <textarea onChange={ handleEdit } name="description" value={ currentTask.description || '' } className="goal-input-sm goal-textinput" />
                    </form>
                    ) : (
                    <div>
                      <p><span onClick={() =>  this.setState({ showForm: true, currentTask: task })} className="goal-title">{ task.title } <button className="btn btn-sm btn-warning">Edit</button></span> <button onClick={() => handleDelete(`${ task.id }`)} className="btn btn-sm btn-danger">Delete Goal</button></p>
                      <p onClick={() =>  this.setState({ showForm: true, currentTask: task })}>{ task.description }</p>
                    </div>
                    )
                  }

                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ tasks }) => {
  return { tasks };
};

const mapDispatch = { createTask, removeTask, editTask };

export default connect(mapStateToProps, mapDispatch)(Form);
