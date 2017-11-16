import { ADD_CARD, UPDATE_CARD, DELETE_CARD, FETCH_CARDS } from './actionTypes.js'

export const addCard = newGoal => ({ type: ADD_CARD, newGoal })
export const updateCard = (goalId, changes) => ({ type: UPDATE_CARD, goalId, changes })
export const deleteCard = goalId => ({ type: DELETE_CARD, goalId })
export const fetchCards = goals => ({ type: FETCH_CARDS, goals })
