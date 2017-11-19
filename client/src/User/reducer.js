import { UPDATE_USER } from './actionTypes.js'

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return Object.assign({}, state, action.changes)

    default:
      return state
  }
}
