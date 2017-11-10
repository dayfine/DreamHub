import { ADD_CARD, UPDATE_CARD, MOVE_CARD, DELETE_CARD, FETCH_CARDS } from './actionTypes.js'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [ ...state, action.newGoal ]

    case UPDATE_CARD:
      const lnIdx = state.findIndex(elem => elem.id === action.updatedGoal.id)
      const nextState = state.slice()

      nextState.splice(lnIdx, 1, action.updatedGoal)
      return nextState

    case DELETE_CARD:
      return state.filter(elem => elem.id !== action.id)

    case FETCH_CARDS:
      return action.goals

    default:
      return state
  }
}
