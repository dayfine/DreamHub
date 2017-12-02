import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../Tasks';
import Bubbles from './Bubbles';

const BubbleChart = (props) => {
  return (
    <div id="chart">
      <h2>Visualize Your Goals</h2>
      <svg width="1000" height="1000">
        <Bubbles { ...props } />
      </svg>
    </div>
  )
};

const mapState = (props) => { return props };

export default connect(mapState)(BubbleChart);
