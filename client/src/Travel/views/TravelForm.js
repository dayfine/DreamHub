import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Fuse from 'fuse.js';
import airports from '../db/airports';

class TravelForm extends Component {
  constructor() {
    super();
    this.state = {
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
    const { to } = this.state;
    // console.log(this.state);
  }

  render() {
    const { onChange, onSubmit } = this;
    const { to, options } = this.state;
    const iata = to.split('—')[0].slice(-5, -2);
    const location = to.split('—')[1]
    const city = location ? location.split(', ')[0].trim() : null;

    return (
      <form onSubmit={ onSubmit }>
        <h2>Where do you want to go?</h2>

        <input value={ to }
          type="text"
          name="to"
          onChange={ onChange }
          list="to"
          className="goal-input-sm"
        />

        <datalist id="to">
          {
            options.slice(0,10).map(option => (
               <option
               key={ option.iata }
               value={ `${option.name} (${option.iata}) — ${option.city}, ${option.country}` }>
               </option>
            ))
          }
        </datalist>

        <div>{ !city ? null : <TravelButtons iata={ iata } city={ city } /> }</div>

      </form>
    )
  }
}

const TravelButtons = ({ iata, city }) => {
  return (
    [
      <button key="0" className="btn btn-sm btn-light travel-btn">
        <Link
          to={ `https://www.google.com/flights/#search;f=;t=${iata};mc=m` }
          target="_blank">Find Flights/Hotels
        </Link>
      </button>,
      <button key="1" className="btn btn-sm btn-light travel-btn">
        <Link
          to={ `https://www.airbnb.com/s/${city}/homes?refinement_path=%2Fhomes&allow_override%5B%5D=&s_tag=GOAhPqw_` }
          target="_blank">Find Airbnb
        </Link>
      </button>,
      <button key="2" className="btn btn-sm btn-light travel-btn">
        <Link
          to={ `https://www.yelp.com/search?find_desc=&find_loc=${city}` }
          target="_blank">See Top Activities
        </Link>
      </button>
    ]
  )
};

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
