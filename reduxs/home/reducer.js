const initialState = {
  data: {},
  loading: false,
  error: null,
}

export default (state = initialState, action) => {
  const { type, ...rest } = action

  if (type.startsWith('home/')) {
    const newState = Object.assign({}, state, rest)
    // console.log('newState =>', newState)
    return newState
  }

  return state
}
