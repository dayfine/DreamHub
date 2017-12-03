import { ADD_GOAL, UPDATE_GOAL, DELETE_GOAL, SET_GOALS } from './actionTypes'
import { TASK_STATUS, GOAL_PROGRESS } from '../constants'
import axios from 'axios'

const addGoal = goal => ({ type: ADD_GOAL, goal })
const updateGoal = goal => ({ type: UPDATE_GOAL, goal })
const deleteGoal = id => ({ type: DELETE_GOAL, id })
export const setGoals = goals => ({ type: SET_GOALS, goals })

export const fetchGoals = () => dispatch => {
  axios.get('/api/goals')
    .then(res => res.data)
    .then(goals => dispatch(setGoals(goals)))
}

export const createGoal = goal => dispatch => {
  axios.post('/api/goals', goal)
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

export const updateGoalProgress = () => (dispatch, getState) => {
  const { goals, tasks } = getState()
  const timeDiffToDay = task => {
    return (new Date() - new Date(task.updatedAt)) / 1000 / 3600 / 24
  }

  goals.forEach(g => {
    g.tasks = tasks.filter(task => task.goalId === g.id)

    let ready = g.progress !== GOAL_PROGRESS.ACCOMPLISHED &&
                g.progress !== GOAL_PROGRESS.ABANDONED &&
                g.tasks.every(t => t.status === TASK_STATUS.COMPLETED)

    let stalled = g.progress !== GOAL_PROGRESS.ACCOMPLISHED &&
                  g.progress !== GOAL_PROGRESS.ABANDONED &&
                  g.tasks.every(t => timeDiffToDay(t) > 3)

    if (ready) {
      dispatch(editGoal({...g, progress: GOAL_PROGRESS.READY}))
    }

    if (stalled) {
      dispatch(editGoal({...g, progress: GOAL_PROGRESS.STALLED}))
    }
  })
}
