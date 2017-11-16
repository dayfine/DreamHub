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
      <div>
        <form onSubmit={ handleSubmit }>
          <input type="text" value={ value } onChange={ handleChange } placeholder="Add new goal..." className="goal-input" />
          <button type="submit" className="btn btn-sm btn-primary">+</button>
        </form>
        <div>
          <ul>
            {
              goals.map(goal => {
                return (
                  <li key={ goal.id } className="goal-item"><span className="goal-title">{ goal.title }</span>
                    <button onClick={() =>  this.setState({ showForm: true, currentGoal: goal })} className="btn btn-sm btn-secondary">Edit</button> <button onClick={() => handleDelete(`${ goal.id }`)} className="btn btn-sm btn-danger">x</button>
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
