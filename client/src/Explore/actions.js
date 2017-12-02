import { SET_EXLPORE_GOALS } from './actionTypes'
import axios from 'axios'

export const setExploreGoals = goals => ({ type: SET_EXLPORE_GOALS, goals })

export const fetchPastGoals = () => dispatch => {
  axios.get('/api/goals/search', {params: {progress: 'Accomplished'}})
    .then(res => res.data)
    .then(goals => dispatch(setExploreGoals(goals)))
}
