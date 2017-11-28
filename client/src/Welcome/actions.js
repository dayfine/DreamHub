import axios from 'axios';
import { ADD_GOAL, GET_GOALS } from './actionTypes'

//ACTION CREATORS
const addGoal = goal=>{
  return {
    type: ADD_GOAL,
    goal
  }
}

export const getGoals = goals => {
  return {
    type: GET_GOALS,
    goals
  }
}

//THUNK CREATORS
export const createGoal = goal => {
  return dispatch => {
    axios.post('/api/goals', goal)
      .then(res => res.data)
      .then(dispatch(addGoal(goal)))
  }
}

export const fetchGoals = () => {
  return dispatch => {
    axios.get('/api/goals')
      .then(res => res.data)
      .then(goals => dispatch(getGoals(goals)))
  }
}

