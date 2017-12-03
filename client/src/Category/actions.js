import { ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY, SET_CATEGORIES } from './actionTypes'
import axios from 'axios'

const addCategory = category => ({ type: ADD_CATEGORY, category })
const updateCategory = category => ({ type: UPDATE_CATEGORY, category })
const deleteCategory = id => ({ type: DELETE_CATEGORY, id })
export const setCategories = categories => ({ type: SET_CATEGORIES, categories })

export const fetchCategories = () => dispatch => {
  return axios.get('/api/category')
    .then(res => res.data)
    .then(goals => dispatch(setCategories(goals)))
}

export const createCategory = category => dispatch => {
  return axios.post(`/api/category/`, category)
    .then(res => res.data)
    .then(category => {
      console.log(category)
      dispatch(addCategory(category))
      return category
    })
}

export const removeCategory = id => dispatch => {
  return axios.delete(`/api/category/${id}`)
    .then(res => res.data)
    .then(() => dispatch(deleteCategory(id)))
}

export const editCategory = (id, changes) => dispatch => {
  return axios.put(`/api/category/${id}`, changes)
    .then(res => res.data)
    .then(category => dispatch(updateCategory(category)))
}
