import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer as GoalsReducer } from './Goals'
import { reducer as TasksReducer } from './Tasks'
import { reducer as AuthReducer } from './Auth'
import { reducer as UserReducer } from './User'
import { reducer as FriendsReducer } from './Friends'
import { reducer as CategoryReducer } from './Category'
import { reducer as WelcomeGoalsReducer } from './Welcome'

const rootReducer = combineReducers({
  goals: GoalsReducer,
  tasks: TasksReducer,
  authenticated: AuthReducer,
  currentUser: UserReducer,
  friends: FriendsReducer,
  categories: CategoryReducer,
  welcomeGoals: WelcomeGoalsReducer
})

const
  initialState = {},
  middlewares = [
    thunkMiddleware,
    createLogger()
  ],
  enhancers = composeWithDevTools(
    applyMiddleware(...middlewares)
  )

export default createStore(rootReducer, initialState, enhancers)
