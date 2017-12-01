import { ADD_GOAL, UPDATE_GOAL, DELETE_GOAL, SET_GOALS, GET_GOALS } from './actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case GET_GOALS:
      return action.goals
      
    case ADD_GOAL:
      return [ ...state, action.goal ]

    case UPDATE_GOAL:
      const lnIdx = state.findIndex(elem => elem.id === action.goal.id)
      const nextState = state.slice()

      nextState.splice(lnIdx, 1, action.goal)
      return nextState

    case DELETE_GOAL:
      return state.filter(elem => elem.id !== action.id)

    case SET_GOALS:
      return action.goals

    default:
      return state
  }
}
