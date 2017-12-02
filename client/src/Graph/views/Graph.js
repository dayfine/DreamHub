import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../Tasks';

class Graph extends Component {
  constructor(props) {
    super(props);
    // this.state = { tasks:  }
  }

  render() {
    console.log(this.props)

    return (
      <div id="chart">
        <h2>Visualize</h2>
        <svg width="100" height="100">

        </svg>
      </div>
    )
  }
}

const mapState = ({ tasks }) => {
  return { tasks }
}

const mapDispatch = { actions };

export default connect(mapState, mapDispatch)(Graph);
