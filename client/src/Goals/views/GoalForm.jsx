import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGoal, removeGoal, editGoal } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', showForm: false, currentGoal: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(ev) {
    this.setState({ value: ev.target.value });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.createGoal(1, this.state.value); // userId hardcoded
  }

  handleDelete(id) {
    this.props.removeGoal(id * 1);
  }

  render() {
    const { value, showForm } = this.state;
    const { handleSubmit, handleChange, handleDelete, handleEdit } = this;
    const { goals } = this.props;

    return (
      <div id="container" className="row">
        <form onSubmit={ handleSubmit } id="goal-form" className="col-xs-12 col-sm-4">
          <input type="text" name="goal-input" id="goal-input" autoFocus="true" placeholder="Add new goal..." value={ value } onChange={ handleChange } />
          <button type="submit" id="goal-btn" className="btn btn-sm">+</button>
        </form>
        <div id="goal-list" className="col-xs-12 col-sm-8">
          <h2>Pool of Ideas</h2>
          <ul>
            {
              goals.map(goal => {
                return (
                  <li key={ goal.id }>{ goal.title }
                    <button onClick={ () => handleDelete(`${ goal.id }`) } className="btn btn-sm btn-danger">x</button>
                    <button onClick={ () =>  this.setState({ showForm: true, currentGoal: goal })} className="btn btn-sm btn-primary">Edit</button>
                  </li>
                )
              })
            }
          </ul>
          {
            !showForm ? null : <EditGoalForm { ...this.props } { ...this.state } />
          }
        </div>
      </div>
    )
  }
}

const EditGoalForm = ({ value, currentGoal, editGoal }) => {
  const handleEdit = (ev) => {
    ev.preventDefault();
    editGoal(currentGoal, ev.target.value); // fix this
  }

  return (
    <form onSubmit={ handleEdit }>
      <input type="text" value={ value } />
      <button className="btn btn-sm btn-primary">Save</button>
    </form>
  )
};

const mapStateToProps = ({ goals }) => {
  return { goals };
};

const mapDispatch = { createGoal, removeGoal, editGoal };

export default connect(mapStateToProps, mapDispatch)(Form);
