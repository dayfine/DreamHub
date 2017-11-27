import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Fuse from 'fuse';
import airports from '../db/airports';
// import { fetchFlight } from '../actions';

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
    console.log(findAirport(value));
    this.setState({ [name]: value });
  }

  onSubmit(ev) {
    ev.preventDefault();
    const { from, to } = this.state;
    console.log(this.state);
    // this.props.fetchFlight(from, to);
  }

  render() {
    const { onChange, onSubmit } = this;
    const { from, to } = this.state;

    return (
      <form onSubmit={ onSubmit }>
        <h2>Quick Search for Travel</h2>
        <p>Enter city or airport name below.</p>
        {/* TO DO: find by city or airport name, not just airport code */}

        <input value={ from }
          type="text"
          name="from"
          onChange={ onChange }
          placeholder="From"
          autoFocus
          className="goal-input-sm"
        />

        <input value={ to }
          type="text"
          name="to"
          onChange={ onChange }
          placeholder="To"
          className="goal-input-sm"
        />

        <button className="btn btn-sm btn-light">
          <Link
            to={ `https://www.google.com/flights/#search;f=${from};t=${to};mc=m` }
            target="_blank">Go!
          </Link>
        </button>
      </form>
    )
  }
}

const findAirport = (input) => {
  var options = {
    shouldSort: true,
    threshold: 0.1,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "name",
      "city",
      "country",
      "iata"
    ]
  };
  var fuse = new Fuse(airports, options); // "list" is the item array
  return fuse.search(input);
};

// const mapDispatch = { fetchFlight };

// export default connect(null, mapDispatch)(TravelForm);

export default TravelForm;
