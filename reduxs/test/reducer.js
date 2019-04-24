const initialState = {
  data: {},
  loading: false,
  error: null,
  message: 'Welcome to react app',
}

export default (state = initialState, action) => {
  const { type, ...rest } = action

  if (type.startsWith('test/')) {
    const newState = Object.assign({}, state, rest)
    console.log('newState =>', newState)
    return newState
  }

  return state
}
