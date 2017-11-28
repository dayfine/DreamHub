import { ADD_FRIEND, UPDATE_FRIEND, DELETE_FRIEND, SET_FRIENDS } from './actionTypes.js'
import axios from 'axios'

export const addFriend = newFriend => ({ type: ADD_FRIEND, newFriend })
export const updateFriend = (friendId, changes) => ({ type: UPDATE_FRIEND, friendId, changes })
export const deleteFriend = friendId => ({ type: DELETE_FRIEND, friendId })
export const setFriends = friends => ({ type: SET_FRIENDS, friends })

export const fetchFriends = () => dispatch => {
  axios.get('/api/friends')
    .then(res => res.data)
    .then(friends => dispatch(setFriends(friends)))
}

export const findFriend = (email) => dispatch => {
  axios.get(`/api/friends/email/${email}`)
  .then(res => res.data)
  .then(friend =>
    // dispatch(addFriend(friend))
    console.log(friend)
    )
  // console.log('im in the axios')
}

export const removeFriend = (id) => dispatch => {
  // console.log('im in the axios delete route' + id)
  axios.delete(`/api/friends/${id}`)
    .then(res => res.data)
    .then(() => dispatch(deleteFriend(id)))
}
