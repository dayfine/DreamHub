import { SET_AUTH, REMOVE_AUTH } from './actionTypes.js'

export default (authenticated = false, action) => {
  switch (action.type) {
    case SET_AUTH:
      return action.authenticated
    case REMOVE_AUTH:
      return false
    default:
      return authenticated
  }
}
