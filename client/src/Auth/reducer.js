import { SET_AUTH } from './actionTypes.js'

export default (authenticated = false, action) => {
  switch (action.type) {
    case SET_AUTH:
      return action.authenticated
    default:
      return authenticated
  }
}
