import { SET_EXLPORE_GOALS } from './actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case SET_EXLPORE_GOALS:
      return action.goals

    default:
      return state
  }
}
