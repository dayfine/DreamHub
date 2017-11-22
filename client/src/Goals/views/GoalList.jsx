import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddCard from '../../common/AddCard';

const GoalList = props => {
  return (
    <div>
    </div>
  )
}

const mapState = state => ({
  goals: state.goals
})

const mapDispatch = { createGoal, removeGoal, editGoal }

export default connect(mapState, mapDispatch)(GoalList)
