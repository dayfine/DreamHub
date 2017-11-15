import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({ value: ev.target.value });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    console.log('Submit Event target value:', this.state.value);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    this.textInput.onClick('destroy');
  }

  render() {
    const { value } = this.state;
    const { handleSubmit, handleChange } = this;
    const { goals } = this.props;

    return (
      <div id="container" className="row">
        <form onSubmit={ handleSubmit } id="goal-form" className="col-xs-12 col-sm-4">
          <input type="text" name="goal-input" id="goal-input" autoFocus="true" placeholder="Add new goal..." value={ value } onChange={ handleChange } />
          <button type="submit" id="goal-btn" className="btn btn-sm">+</button>
        </form>
        <div id="goal-list" className="col-xs-12 col-sm-8">
          <h2>Pool of Ideas</h2>
          <ul className="list-unstyled">
            {
              goals.map(goal => <li key={ goal.id }>{ goal.title }</li>)
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ goals }) => {
  return { goals };
};

export default connect(mapStateToProps)(Form);
