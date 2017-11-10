import { ADD_CARD, UPDATE_CARD, MOVE_CARD, DELETE_CARD, FETCH_CARDS } from './actionTypes.js'

export const addCard = payload => ({ type: ADD_CARD, payload })
export const updateCard = payload => ({ type: UPDATE_CARD, payload })
export const moveCard = payload => ({ type: MOVE_CARD, payload })
export const deleteCard = payload => ({ type: DELETE_CARD, payload })
export const fetchCard = payload => ({ type: FETCH_CARDS, payload })
