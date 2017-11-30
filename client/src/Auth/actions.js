import { SET_AUTH } from './actionTypes.js'
import axios from 'axios'
import { setData, resetData } from './util/bulkActions'

const storage = window.localStorage

export const setAuth = val => ({ type: SET_AUTH, authenticated: val })

export const auth = (credentials, history, formName) => dispatch => {
  return axios.post(`/api/auth/${formName}`, credentials)
    .then(result => result.data)
    .then(token => {
      storage['authToken'] = token
      dispatch(setAuth(true))
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
    .then(user => dispatch(setData(user)))
    .catch(() => console.log('not logged in'))
}

export const logout = history => dispatch => {
  delete axios.defaults.headers.common['Authorization']
  delete storage.authToken

  history.push('/')
  dispatch(setAuth(false))
  dispatch(resetData())
}
