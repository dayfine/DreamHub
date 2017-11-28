import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Fuse from 'fuse.js';
import airports from '../db/airports';

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
    this.setState({ [name]: value });
  }

  onSubmit(ev) {
    ev.preventDefault();
    const { from, to } = this.state;
    console.log(this.state);
  }

  render() {
    const { onChange, onSubmit } = this;
    const { from, to, options } = this.state;
    const fromCode = from.split('-')[0].slice(-5, -2);
    const toCode = to.split('-')[0].slice(-5, -2);
    const location = to.split('-')[1]
    const city = location ? location.split(', ')[0].trim() : null;

    return (
      <form onSubmit={ onSubmit }>
        <h2>Quick Search for Travel</h2>
        <p><strong>Enter city or airport name below.</strong></p>

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
            target="_blank">Find Flights/Hotels
          </Link>
        </button> {
          !city ? null :
          [
            <button key="1" className="btn btn-sm btn-light">
              <Link
                to={ `https://www.airbnb.com/s/${city}/homes?refinement_path=%2Fhomes&allow_override%5B%5D=&s_tag=GOAhPqw_` }
                target="_blank">Find Airbnb
              </Link>
            </button>,
            <button key="2" className="btn btn-sm btn-light">
              <Link
                to={ `https://www.yelp.com/search?find_desc=&find_loc=${city}` }
                target="_blank">See Top Rated Activities
              </Link>
            </button>
          ]
        }
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
  var fuse = new Fuse(airports, options);
  return fuse.search(input);
};

export default TravelForm;
