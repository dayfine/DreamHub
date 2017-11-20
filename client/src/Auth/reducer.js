import { SET_USER, REMOVE_USER } from './actionTypes.js'

export default (currentUser = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user
    case REMOVE_USER:
      return {}
    default:
      return currentUser
  }
}
