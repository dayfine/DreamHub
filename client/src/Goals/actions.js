import { ADD_GOAL, UPDATE_GOAL, DELETE_GOAL, FETCH_GOALS } from './actionTypes.js'
import axios from 'axios';

const addGoal = newGoal => ({ type: ADD_GOAL, newGoal })
const updateGoal = updatedGoal => ({ type: UPDATE_GOAL, updatedGoal })
const deleteGoal = id => ({ type: DELETE_GOAL, id })
const fetchGoals = goals => ({ type: FETCH_GOALS, goals })

export const getGoals = () => dispatch => {
  axios.get('/api/goals')
    .then(res => res.data)
    .then(goals => dispatch(fetchGoals(goals)))
}
