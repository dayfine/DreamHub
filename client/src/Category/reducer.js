import { ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY, SET_CATEGORIES } from './actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [ ...state, action.category ]

    case UPDATE_CATEGORY:
      const lnIdx = state.findIndex(elem => elem.id === action.category.id)
      const nextState = state.slice()

      nextState.splice(lnIdx, 1, action.category)
      return nextState

    case DELETE_CATEGORY:
      return state.filter(elem => elem.id !== action.id)

    case SET_CATEGORIES:
      return action.categories

    default:
      return state
  }
}
