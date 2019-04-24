/* eslint-disable import/prefer-default-export */
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
// epic section
import { testInitEpic } from './test/epic'

// reducer section
import testReducer from './test/reducer'

const rootReducer = combineReducers({
  testReducer,
})

const rootEpic = combineEpics(testInitEpic)

export const makeStore = () => {
  const epicMiddleware = createEpicMiddleware({ dependencies: {} })

  const composeEnhancers = compose

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))

  epicMiddleware.run(rootEpic)

  return store
}
