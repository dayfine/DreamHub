import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { createGoal, removeGoal, editGoal } from '../actions';
import AddCard from '../../common/AddCard';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { type: 'goal', value: '', showForm: false, currentGoal: {} };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleDelete(id) {
    console.log(id)
    this.props.removeGoal(id);
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
    const { handleDelete, handleEdit, handleSave } = this;
    const { goals, createGoal } = this.props;

    return (
      <div id="container">
        <AddCard type='goal'/>
        <ul>{goals.map(goal => {
          return (
            <li key={ goal.id } className="goal-item">
            {showForm && currentGoal.id === goal.id
              ? (
              <form onSubmit={ handleSave } className="goal-edit">
                <input
                  type="text"
                  onChange={ handleEdit }
                  name="title"
                  value={ currentGoal.title }
                  autoFocus
                  className="goal-input-sm" />
                <button className="btn btn-sm btn-success">Save</button>
                <button
                  onClick={() => this.setState({ showForm: false }) }
                  className="btn btn-sm btn-secondary">Cancel</button>
                <textarea
                  onChange={ handleEdit }
                  name="description"
                  value={ currentGoal.description || '' }
                  className="goal-input-sm goal-textinput" />
              </form>
              )
              : (
              <div>
                <p>
                <span
                  onClick={() =>  this.setState({ showForm: true, currentGoal: goal })}
                  className="goal-title">
                  { goal.title }
                  <button className="btn btn-sm btn-warning">Edit</button>
                </span>
                <button
                  onClick={handleDelete.bind(this, goal.id)}
                  className="btn btn-sm btn-danger">Delete Goal</button>
                </p>
                <p onClick={() =>  this.setState({ showForm: true, currentGoal: goal })}>{ goal.description }</p>
                {/* TODO: fetch the Kanban board for this goal id */}
                <Link to={ `/kanban/${goal.id}`}>See progress on Kanban board</Link>
                <br />
                <Link to={ `/goals/${goal.id}`}>See Details</Link>
              </div>
              )}
            </li>
          )})}
        </ul>
      </div>
    )
  }
}

const mapState = state => ({
  goals: state.goals
})

const mapDispatch = { createGoal, removeGoal, editGoal };

export default connect(mapState, mapDispatch)(Form);
