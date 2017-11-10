import { ADD_GOAL, UPDATE_GOAL, DELETE_GOAL, FETCH_GOALS } from './actionTypes.js'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOAL:
      return [ ...state, action.newGoal ]

    case UPDATE_GOAL:
      const lnIdx = state.findIndex(elem => elem.id === action.updatedGoal.id)
      const nextState = state.slice()

      nextState.splice(lnIdx, 1, action.updatedGoal)
      return nextState

    case DELETE_GOAL:
      return state.filter(elem => elem.id !== action.id)

    case FETCH_GOALS:
      return action.goals

    default:
      return state
  }
}
