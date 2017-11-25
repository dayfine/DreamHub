import { SET_USER, REMOVE_USER, UPDATE_USER } from './actionTypes.js'

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user

    case UPDATE_USER:
      return Object.assign({}, state, action.changes)

    case REMOVE_USER:
      return {}

    default:
      return state
  }
}
