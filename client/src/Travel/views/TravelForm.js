/* global google */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLocation, fetchFlight } from '../actions';

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
    this.setState({ [name]: value });

    /* google autocomplete:
      const from = this.from.value;
      const to = this.to.value;
      const autocompleteF = new google.maps.places.SearchBox(this.from, {types: [ 'airport' ]});
      const autocompleteV = new google.maps.places.SearchBox(this.to, {types: [ 'airport' ]});
      autocompleteF.addListener('place changed', () => {
        const places = autocompleteF.getPlaces();
        if (places.length == 0) return;
        this.setState({ from: places[0] });
      });

      autocompleteV.addListener('place changed', () => {
        const places = autocompleteV.getPlaces();
        if (places.length == 0) return;
      });
    */
  }

  onSubmit(ev) {
    ev.preventDefault();
    const { from, to } = this.state;
    console.log(this.state);
    this.props.fetchFlight(from, to);
  }

  render() {
    const { onChange, onSubmit } = this;
    const { from, to } = this.state;

    // Note: Can place this module on Kanban board with category or goal Travel.

    return (
      <form onSubmit={ onSubmit }>
        <h2>Quick Search for Travel</h2>

        <input value={ from }
          type="text"
          name="from"
          onChange={ onChange }
          autoFocus
          className="goal-input-sm"
        />

        <input value={ to }
          type="text"
          name="to"
          onChange={ onChange }
          className="goal-input-sm"
        />

        {/* for google autocomplete:
          <input ref={ input => this.to = input }
            type="text"
            onChange={ onChange }
            className="goal-input-sm"
          />
        */}

        <button className="btn btn-sm btn-light"><Link to={ `https://www.google.com/flights/#search;f=${from};t=${to};mc=m` } target="_blank">Go!</Link></button>
      </form>
    )
  }
}

const mapDispatch = { setLocation, fetchFlight };

export default connect(null, mapDispatch)(TravelForm);
