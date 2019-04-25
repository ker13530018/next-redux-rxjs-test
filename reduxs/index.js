/* eslint-disable import/prefer-default-export */
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
// epic section
import getConfig from 'next/config'
import { homeInitEpic } from './home/epic'
import { contentGetEpic } from './content/epic'
// reducer section
import homeReducer from './home/reducer'
import contentReducer from './content/reducer'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

const rootReducer = combineReducers({
  homeReducer,
  contentReducer,
})

const rootEpic = combineEpics(homeInitEpic, contentGetEpic)

export const makeStore = () => {
  const epicMiddleware = createEpicMiddleware({ dependencies: { API_URL } })

  const composeEnhancers = compose

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))

  epicMiddleware.run(rootEpic)

  return store
}
