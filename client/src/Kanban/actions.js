import { GET_BOARD } from './actionTypes.js';
import axios from 'axios';

export const getBoard = board => ({ type: GET_BOARD, board });

export const fetchBoard = goalId => dispatch => {
  goalId = goalId || 1; // if no goal is selected; display the first one
  axios.get(`/api/goals/${goalId}`)
    .then(res => res.data)
    .then(board => dispatch(getBoard(board)))
};
