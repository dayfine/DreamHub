import { ADD_TASK, UPDATE_TASK, DELETE_TASK, SET_TASKS } from './actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [ ...state, action.task ]

    case UPDATE_TASK:
      const lnIdx = state.findIndex(elem => elem.id === action.task.id)
      const nextState = state.slice()
      console.log(state)
      nextState.splice(lnIdx, 1, action.task)
      console.log(nextState)
      return nextState

    case DELETE_TASK:
      return state.filter(elem => elem.id !== action.id)

    case SET_TASKS:
      return action.tasks

    default:
      return state
  }
}
