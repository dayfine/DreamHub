import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer as GoalsReducer } from './Goals'
import { reducer as TasksReducer } from './Tasks'
import { reducer as kanbanReducer } from './Kanban'
import { reducer as AuthReducer } from './Auth'
import { reducer as CategoryReducer } from './Category'

const rootReducer = combineReducers({
  cards: kanbanReducer,
  goals: GoalsReducer,
  tasks: TasksReducer,
  currentUser: AuthReducer,
  categories: CategoryReducer
})

const initialState = {}

const
  middlewares = [
    thunkMiddleware,
    createLogger()
  ],
  enhancers = composeWithDevTools(
    applyMiddleware(...middlewares)
  )

export default createStore(rootReducer, initialState, enhancers)
// export * from './Goals'
// export * from './Tasks'
