import { SET_LOCATION, GET_FLIGHT } from './actionTypes';

export default (state = '', action) => {
  switch(action.type) {
    case SET_LOCATION:
      return action.location || '';

    case GET_FLIGHT:
      return action.flight;

    default:
      return state;
  }
};
