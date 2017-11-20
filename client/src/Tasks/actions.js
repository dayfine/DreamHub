import { ADD_TASK, UPDATE_TASK, DELETE_TASK, FETCH_TASKS } from './actionTypes'
import axios from 'axios'

const addTask = task => ({ type: ADD_TASK, task })
const updateTask = task => ({ type: UPDATE_TASK, task })
const deleteTask = id => ({ type: DELETE_TASK, id })
const fetchTasks = tasks => ({ type: FETCH_TASKS, tasks })

export const getTasks = (goalId) => dispatch => {
  const id = goalId || 1;
  axios.get(`/api/goals/${id}/tasks`)
    .then(res => res.data)
    .then(tasks => dispatch(fetchTasks(tasks)))
}

export const createTask = (goalId, title) => dispatch => {
  axios.post(`/api/goals/${goalId}/tasks`, { goalId, title })
    .then(res => res.data)
    .then(task => dispatch(addTask(task)))
}

export const removeTask = (goalId, id) => dispatch => {
  axios.delete(`/api/goals/${goalId}/tasks/${id}`)
    .then(res => res.data)
    .then(() => dispatch(deleteTask(id)))
}

export const editTask = (task) => dispatch => {
  axios.put(`/api/goals/${task.goalId}/tasks/${task.id}`, task)
    .then(res => res.data)
    .then(task => dispatch(updateTask(task)))
}
