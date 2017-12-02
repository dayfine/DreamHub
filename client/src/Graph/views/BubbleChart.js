import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bubbles from './Bubbles';

const BubbleChart = (props) => {
  const width = 960, height = 960;

  return (
    <div>
      <h2>Visualize Your Goals</h2>
      <Bubbles { ...props } width={ width } height={ height } />
    </div>
  )
};

const mapState = (props) => { return props };

export default connect(mapState)(BubbleChart);
