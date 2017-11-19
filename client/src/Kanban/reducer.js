import { ADD_CARD, UPDATE_CARD, DELETE_CARD, FETCH_CARDS, GET_BOARD } from './actionTypes.js'

const initialState = [
  {
    id: 1,
    title: 'Learn Spanish',
    tasks: [ {description: 'Memorize vocabulary'} ],
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Prep For Technical Interviews',
    tasks: [ {description: 'Do algo question'} ],
    status: 'In Progress'
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [ ...state, action.newGoal ]

    case UPDATE_CARD:
      const lnIdx = state.findIndex(elem => elem.id === action.goalId)
      const nextState = state.slice()
      const updatedGoal = Object.assign({}, state[lnIdx], action.changes)

      nextState.splice(lnIdx, 1, updatedGoal)
      return nextState

    case DELETE_CARD:
      return state.filter(elem => elem.id !== action.goalId)

    case FETCH_CARDS:
      return action.goals

    case GET_BOARD:
      return action.board

    default:
      return state
  }
}
