import { GET_FLIGHT } from './actionTypes';

export default (state = '', action) => {
  switch(action.type) {
    case GET_FLIGHT:
      return action.flight;

    default:
      return state;
  }
};
