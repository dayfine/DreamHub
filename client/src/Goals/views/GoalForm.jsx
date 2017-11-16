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
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(ev) {
    this.setState({ value: ev.target.value });
  }

  // handles adding new goal
  handleSubmit(ev) {
    ev.preventDefault();
    this.props.createGoal(1, this.state.value); // userId hardcoded
    this.setState({ value: '' });
  }

  handleDelete(id) {
    this.props.removeGoal(id * 1);
  }

  // handles editing goal
  handleEdit(ev) {
    const currentGoal = Object.assign({}, this.state.currentGoal, { title: ev.target.value });
    this.setState({ currentGoal });
  }

  // handles saving edited goal
  handleSave(ev) {
    ev.preventDefault();
    this.props.editGoal(this.state.currentGoal, 1); // userId hardcoded
    this.setState({ showForm: false });
  }

  render() {
    const { value, showForm } = this.state;
    const { handleSubmit, handleChange, handleDelete, handleEdit, handleSave } = this;
    const { goals } = this.props;

    return (
      <div>
        <form onSubmit={ handleSubmit }>
          <input type="text" value={ value } onChange={ handleChange } placeholder="Add new goal..." className="goal-input" />
          <button type="submit" className="btn btn-sm btn-primary">+</button>
        </form>
        <ul>
          {
            goals.map(goal => {
              return (
                <li key={ goal.id } className="goal-item">
                  {
                    !showForm ? (
                        <span onClick={() =>  this.setState({ showForm: true, currentGoal: goal })}  className="goal-title">{ goal.title }</span>
                      ) : (
                        <form onSubmit={ handleSave } className="goal-edit">
                          <input type="text" onChange={ handleEdit } value={ this.state.currentGoal.title } className="goal-input-sm" /> <button className="btn btn-sm btn-success">Save</button>
                        </form>
                      )
                  }
                  <button onClick={() => handleDelete(`${ goal.id }`)} className="btn btn-sm btn-danger">x</button>
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
