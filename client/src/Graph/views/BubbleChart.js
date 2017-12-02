import React, { Component } from 'react';
import Bubbles from './Bubbles';

const BubbleChart = ({ goalTasks }) => {
  const width = 600, height = 800;

  return (
    <div>
      <h2>Visualize Your Goals</h2>
      <Bubbles tasks={goalTasks} width={ width } height={ height } />
    </div>
  )
};

export default BubbleChart;
