import axios from 'axios';
import { ADD_GOAL } from './actionTypes'

//ACTION CREATORS
const addGoal = goal=>{
  return {
    type: ADD_GOAL,
    goal
  }
}

//THUNK CREATORS
export const createGoal = goal => {
  return dispatch => {
    axios.post('/api/goals', {goal})
      .then(res => res.data)
      .then(dispatch(addGoal(goal)))
  }
}

