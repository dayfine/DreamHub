import { SET_AUTH, REMOVE_AUTH } from './actionTypes.js'
import axios from 'axios'

import { setGoals } from '../Goals/actions'
import { setTasks } from '../Tasks/actions'
import { setUser, removeUser } from '../User/actions'
import { setFriends } from '../Friends/actions'
import { MapGoalToTasks } from '../Tasks/util/mappers'

const storage = window.localStorage

export const setAuth = val => ({ type: SET_AUTH, authenticated: val })
export const removeAuth = () => ({ type: REMOVE_AUTH })

export const auth = (credentials, history, formName) => dispatch => {
  return axios.post(`/api/auth/${formName}`, credentials)
    .then(result => result.data)
    .then(token => {
      storage['authToken'] = token
      dispatch(loadUserData(token))
      history.push('/home')
    })
    .catch(err => dispatch(setAuth({err})))
}

export const loadUserData = token => dispatch => {
  token
    ? axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    : (delete axios.defaults.headers.common['Authorization'])

  return axios.get('/api/auth/me')
    .then(result => result.data)
    .then(user => {
      dispatch(setAuth(true))
      dispatch(setUser(user))
      dispatch(setGoals(user.goals))
      dispatch(setTasks(MapGoalToTasks(user.goals)))
      dispatch(setFriends(user.friends))
    })
    .catch(() => console.log('not logged in'))
}

export const logout = history => dispatch => {
  delete axios.defaults.headers.common['Authorization']
  return axios.delete('/api/auth')
    .then(() => {
      dispatch(removeAuth())
      dispatch(removeUser())
      history.push('/')
    })
    .catch(() => console.log('problem during logout'))
}
