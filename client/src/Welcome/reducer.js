import { ADD_GOAL } from './actionTypes'

//INITIAL STATE
const initialState = {
  goals: []
}

//REDUCER
const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_GOAL:
      return [...state, action.goal];
    default:
      return state;
  }
}

export default reducer;