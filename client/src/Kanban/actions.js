import { GET_BOARD } from './actionTypes.js';
import axios from 'axios';

export const getBoard = board => ({ type: GET_BOARD, board });

export const fetchBoard = goalId => dispatch => {
  axios.get(`/api/goals/${goalId}`)
    .then(res => res.data)
    .then(board => dispatch(getBoard(board)))
};
