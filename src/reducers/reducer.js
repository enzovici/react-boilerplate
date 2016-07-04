
const defaultState = {
  
}

const mainStore = (state = defaultState, action) => {
  console.log('ACTION:', action.type)
  switch (action.type) {
    case '':
      return Object.assign({}, state, {})

    default:
      console.log(action, 'UNKNOWN ACTION')
      return state
  }
}

export default mainStore
