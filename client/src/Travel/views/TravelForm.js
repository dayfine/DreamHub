import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TravelForm extends Component {
  constructor() {
    super();
    this.state = {
      from: '',
      to: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(ev) {
    const { name, value } = ev.target;
    this.setState({[ name ]: value });
    console.log(name, value)
  }

  onSubmit(ev) {
    ev.preventDefault();
    console.log(this.state);
  }

  render() {
    const { onChange, onSubmit } = this;
    const { from, to } = this.state;

    return (
      <form onSubmit={ onSubmit }>
        {/* Note: Can place this module on Kanban board with category or goal Travel. */}

        <h2>Quick Search for Travel</h2>

        <input
          type="text"
          onChange={ onChange }
          name="from"
          value={ from }
          placeholder="From"
          autoFocus
          className="goal-input-sm" />

         <input
          type="text"
          onChange={ onChange }
          name="to"
          value={ to }
          placeholder="To"
          autoFocus
          className="goal-input-sm" />

        <button className="btn btn-sm btn-light"><Link to={ `https://www.google.com/flights/#search;f=${from};t=${to};mc=m` } target="_blank">Go!</Link></button>
      </form>
    )
  }
}

export default TravelForm;
