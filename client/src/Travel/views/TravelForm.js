import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Fuse from 'fuse.js';
import airports from '../db/airports';
// import { fetchFlight } from '../actions';

class TravelForm extends Component {
  constructor() {
    super();
    this.state = {
      from: '',
      to: '',
      options: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(ev) {
    const { name, value } = ev.target;
    this.setState({ options: findAirport(value) });
    // const code = value.slice(-3);
    // console.log(code);
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
    const { from, to, options } = this.state;
    const fromCode = from.split('-')[0].slice(-5, -2);
    const toCode = to.split('-')[0].slice(-5, -2);

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
          list="from"
          className="goal-input-sm"
        />

        <datalist id="from">
          {
            options.slice(0,10).map(option => (<option key={ option.iata } value={ `${option.name} (${option.iata}) - ${option.city}, ${option.country}` }></option>))
          }
        </datalist>

        <input value={ to }
          type="text"
          name="to"
          onChange={ onChange }
          placeholder="To"
          list="to"
          className="goal-input-sm"
        />

        <datalist id="to">
          {
            options.slice(0,10).map(option => (<option key={ option.iata } value={ `${option.name} (${option.iata}) - ${option.city}, ${option.country}` }></option>))
          }
        </datalist>

        <button className="btn btn-sm btn-light">
          <Link
            to={ `https://www.google.com/flights/#search;f=${fromCode};t=${toCode};mc=m` }
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
    tokenize: true,
    threshold: 0,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 3,
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
