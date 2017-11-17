import { ADD_GOAL, UPDATE_GOAL, DELETE_GOAL, FETCH_GOALS } from './actionTypes'
import axios from 'axios'

const addGoal = goal => ({ type: ADD_GOAL, goal })
const updateGoal = goal => ({ type: UPDATE_GOAL, goal })
const deleteGoal = id => ({ type: DELETE_GOAL, id })
const fetchGoals = goals => ({ type: FETCH_GOALS, goals })

export const getGoals = () => dispatch => {
  axios.get('/api/goals')
    .then(res => res.data)
    .then(goals => dispatch(fetchGoals(goals)))
}

export const createGoal = (userId, title) => dispatch => {
  axios.post('/api/goals', { userId, title })
    .then(res => res.data)
    .then(goal => dispatch(addGoal(goal)))
}

export const removeGoal = (id) => dispatch => {
  axios.delete(`/api/goals/${id}`)
    .then(res => res.data)
    .then(() => dispatch(deleteGoal(id)))
}

export const editGoal = (goal) => dispatch => {
  console.log(goal.id)
  axios.put(`/api/goals/${goal.id}`, goal)
    .then(res => res.data)
    .then(goal => dispatch(updateGoal(goal)))
}
