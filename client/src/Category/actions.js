import { ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY, SET_CATEGORIES } from './actionTypes'
import axios from 'axios'

const addCategory = category => ({ type: ADD_CATEGORY, category })
const updateCategory = category => ({ type: UPDATE_CATEGORY, category })
const deleteCategory = id => ({ type: DELETE_CATEGORY, id })
export const setCategories = categories => ({ type: SET_CATEGORIES, categories })

export const fetchCategories = () => dispatch => {
  axios.get('/api/category')
    .then(res => res.data)
    .then(goals => dispatch(setCategories(goals)))
}

export const createCategory = name => dispatch => {
  axios.post(`/api/category/${name}`)
    .then(res => res.data)
    .then(category => dispatch(addCategory(category)))
}

export const removeCategory = id => dispatch => {
  axios.delete(`/api/category/${id}`)
    .then(res => res.data)
    .then(() => dispatch(deleteCategory(id)))
}

export const editCategory = (id, changes) => dispatch => {
  axios.put(`/api/category/${id}`, changes)
    .then(res => res.data)
    .then(category => dispatch(updateCategory(category)))
}
