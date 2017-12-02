import React, { Component } from 'react';
import { connect } from 'react-redux';
import d3 from 'd3';
import Bubbles from './Bubbles';

const BubbleChart = (props) => {
  const width = 960, height = 960;

  return (
    <div id="chart">
      <h2>Visualize Your Goals</h2>
      <svg className="bubbleChart" width={ width } height={ height }>
        <Bubbles { ...props } width={ width } height={ height } />
      </svg>
    </div>
  )
};

const mapState = (props) => { return props };

export default connect(mapState)(BubbleChart);
