import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

// import { reducer as GoalsReducer } from './Goals'
import { reducer as kanbanReducer } from './Kanban'

const rootReducer = combineReducers({
  goals: kanbanReducer
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
export * from './Goals';
