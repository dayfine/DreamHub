import { SET_USER, REMOVE_USER } from './actionTypes.js'
import axios from 'axios'

import { setGoals } from '../Goals/actions'
import { setTasks } from '../Tasks/actions'
import { setFriends } from '../Friends/actions'
import { MapGoalToTasks } from '../Tasks/util/mappers'

const storage = window.localStorage

export const setCurrUser = user => ({ type: SET_USER, user })
export const removeCurrUser = () => ({ type: REMOVE_USER })

export const auth = (credentials, history, formName) => dispatch => {
  return axios.post(`/api/auth/${formName}`, credentials)
    .then(result => result.data)
    .then(token => {
      storage['authToken'] = token
      dispatch(loadUserData(token))
      history.push('/home')
    })
    .catch(err => dispatch(setCurrUser({err})))
}

export const loadUserData = token => dispatch => {
  token
    ? axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    : (delete axios.defaults.headers.common['Authorization'])

  return axios.get('/api/auth/me')
    .then(result => result.data)
    .then(user => {
      dispatch(setCurrUser(user))
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
      dispatch(removeCurrUser())
      history.push('/')
    })
    .catch(() => console.log('problem during logout'))
}
