import { ADD_TASK, UPDATE_TASK, DELETE_TASK, FETCH_TASKS } from './actionTypes'
import axios from 'axios'

const addTask = task => ({ type: ADD_TASK, task })
const updateTask = task => ({ type: UPDATE_TASK, task })
const deleteTask = id => ({ type: DELETE_TASK, id })
const fetchTasks = tasks => ({ type: FETCH_TASKS, tasks })

// TO DO:
// goalId hardcoded for now
const goalId = 1;

export const getTasks = () => dispatch => {
  axios.get(`/api/goals/${goalId}/tasks`)
    .then(res => res.data)
    .then(tasks => dispatch(fetchTasks(tasks)))
}

export const createTask = (goalId, title) => dispatch => {
  axios.post(`/api/goals/${goalId}/tasks`, { goalId, title })
    .then(res => res.data)
    .then(task => dispatch(addTask(task)))
}

export const removeTask = (id) => dispatch => {
  axios.delete(`/api/goals/${goalId}/tasks/${id}`)
    .then(res => res.data)
    .then(() => dispatch(deleteTask(id)))
}

export const editTask = (task) => dispatch => {
  axios.put(`/api/goals/${goalId}/tasks/${task.id}`, task)
    .then(res => res.data)
    .then(task => dispatch(updateTask(task)))
}
