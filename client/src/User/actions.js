import { SET_USER, REMOVE_USER, UPDATE_USER } from './actionTypes.js'

export const setUser = user => ({ type: SET_USER, user })
export const updateUser = changes => ({ type: UPDATE_USER, changes })
export const removeUser = () => ({ type: REMOVE_USER })
