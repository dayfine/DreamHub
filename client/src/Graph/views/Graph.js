import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../Tasks';
import BubbleChart from './BubbleChart';

const Graph = (props) => {
  return (
    <div id="chart">
      <h2>Visualize Your Goals</h2>
      <BubbleChart { ...props } />
    </div>
  )
};

const mapState = (props) => { return props };

export default connect(mapState)(Graph);
