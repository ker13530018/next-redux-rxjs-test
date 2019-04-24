/* eslint-disable import/prefer-default-export */
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
// epic section
import getConfig from 'next/config'
import { homeInitEpic } from './home/epic'

// reducer section
import homeReducer from './home/reducer'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

const rootReducer = combineReducers({
  homeReducer,
})

const rootEpic = combineEpics(homeInitEpic)

export const makeStore = () => {
  const epicMiddleware = createEpicMiddleware({ dependencies: { API_URL } })

  const composeEnhancers = compose

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))

  epicMiddleware.run(rootEpic)

  return store
}
