import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { createGoal, removeGoal, editGoal } from '../actions';
import AddCard from '../../common/AddCard';
import { views as Kanban } from '../../Kanban';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { type: 'goal', value: '', showForm: false, currentGoal: {} };
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
    this.props.createGoal(this.props.userId, this.state.value);
    this.setState({ value: '' });
  }

  handleDelete(id) {
    this.props.removeGoal(id * 1);
  }

  // handles editing goal
  handleEdit(ev) {
    const { name, value } = ev.target;
    const currentGoal = Object.assign({}, this.state.currentGoal, { [ name ]: value });
    this.setState({ currentGoal });
  }

  // handles saving edited goal
  handleSave(ev) {
    ev.preventDefault();
    this.props.editGoal(this.state.currentGoal, this.props.userId);
    this.setState({ showForm: false });
  }

  render() {
    const { value, showForm, currentGoal } = this.state;
    const { handleSubmit, handleChange, handleDelete, handleEdit, handleSave } = this;
    const { goals, createGoal } = this.props;

    return (
      <div id="container">
        <AddCard { ...this.state } { ...this } />
        <ul>
          {
            goals.map(goal => {
              return (
                <li key={ goal.id } className="goal-item">
                  {
                    showForm && currentGoal.id === goal.id ? (
                    <form onSubmit={ handleSave } className="goal-edit">
                      <input type="text" onChange={ handleEdit } name="title" value={ currentGoal.title } autoFocus className="goal-input-sm" /> <button className="btn btn-sm btn-success">Save</button> <button onClick={() => this.setState({ showForm: false }) } className="btn btn-sm btn-secondary">Cancel</button>
                      <textarea onChange={ handleEdit } name="description" value={ currentGoal.description || '' } className="goal-input-sm goal-textinput" />
                    </form>
                    ) : (
                    <div>
                      <p><span onClick={() =>  this.setState({ showForm: true, currentGoal: goal })} className="goal-title">{ goal.title } <button className="btn btn-sm btn-warning">Edit</button></span> <button onClick={() => handleDelete(`${ goal.id }`)} className="btn btn-sm btn-danger">Delete Goal</button></p>
                      <p onClick={() =>  this.setState({ showForm: true, currentGoal: goal })}>{ goal.description }</p>
                      {/* TODO: fetch the Kanban board for this goal id */}
                      <Link to={ `/kanban/${goal.id}`}>See progress on Kanban board</Link>
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

const mapStateToProps = ({ goals }) => {
  return { goals };
};

const mapDispatch = { createGoal, removeGoal, editGoal };

export default connect(mapStateToProps, mapDispatch)(Form);
