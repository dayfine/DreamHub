import { ADD_TASK, UPDATE_TASK, DELETE_TASK, SET_TASKS } from './actionTypes'
import axios from 'axios'

const addTask = task => ({ type: ADD_TASK, task })
const updateTask = task => ({ type: UPDATE_TASK, task })
const deleteTask = id => ({ type: DELETE_TASK, id })
export const setTasks = tasks => ({ type: SET_TASKS, tasks })

export const getGoalTasks = (goalId) => dispatch => {
  const id = goalId || 1;
  axios.get(`/api/goals/${id}/tasks`)
    .then(res => res.data)
    .then(tasks => dispatch(setTasks(tasks)))
}

export const createTask = newTask => dispatch => {
  axios.post(`/api/goals/${newTask.goalId}/tasks`, newTask)
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
