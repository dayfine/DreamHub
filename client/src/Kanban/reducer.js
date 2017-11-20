import { GET_BOARD } from './actionTypes.js';

export default (state = [], action) => {
  switch (action.type) {
    case GET_BOARD:
      return action.board

    default:
      return state
  }
}
