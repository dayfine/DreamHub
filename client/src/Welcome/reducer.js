import { ADD_GOAL, GET_GOALS } from './actionTypes'

//INITIAL STATE
//const initialState = {
//  goals: []
//}

//REDUCER
const reducer = (state = [], action) => {
  switch(action.type){
    case ADD_GOAL:
      return [...state, action.goal];
    case GET_GOALS:
      return action.goals
    default:
      return state;
  }
}

export default reducer;