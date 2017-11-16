import { ADD_FRIEND, UPDATE_FRIEND, DELETE_FRIEND, FETCH_FRIENDS } from './actionTypes.js'

export const addFriend = newFriend => ({ type: ADD_FRIEND, newFriend })
export const updateFriend = (friendId, changes) => ({ type: UPDATE_FRIEND, friendId, changes })
export const deleteFriend = friendId => ({ type: DELETE_FRIEND, friendId })
export const fetchFriends = friends => ({ type: FETCH_FRIENDS, friends })
