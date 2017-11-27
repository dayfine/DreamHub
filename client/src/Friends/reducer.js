import { ADD_FRIEND, UPDATE_FRIEND, DELETE_FRIEND, SET_FRIENDS } from './actionTypes.js'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return [ ...state, action.newFriend ]

    case UPDATE_FRIEND:
      const lnIdx = state.findIndex(elem => elem.id === action.friendId)
      const nextState = state.slice()
      const updatedFriend = Object.assign({}, state[lnIdx], action.changes)

      nextState.splice(lnIdx, 1, updatedFriend)
      return nextState

    case DELETE_FRIEND:
      return state.filter(elem => elem.id !== action.friendId)

    case SET_FRIENDS:
      return action.friends

    default:
      return state
  }
}
