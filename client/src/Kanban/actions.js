import { ADD_CARD, UPDATE_CARD, DELETE_CARD, FETCH_CARDS, GET_BOARD } from './actionTypes.js'
import axios from 'axios';

// export const addCard = newGoal => ({ type: ADD_CARD, newGoal })
export const updateCard = (goalId, changes) => ({ type: UPDATE_CARD, goalId, changes })
// export const deleteCard = goalId => ({ type: DELETE_CARD, goalId })
// export const fetchCards = goals => ({ type: FETCH_CARDS, goals })
export const getBoard = board => ({ type: GET_BOARD, board })

export const fetchBoard = goalId => dispatch => {
  axios.get(`/goals/${goalId}`)
    .then(res => res.data)
    .then(board => getBoard(board))
};
