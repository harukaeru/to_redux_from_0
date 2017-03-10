import { createStore } from 'redux'

const todos = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      // You must copy states because if did not, you can not watch object histories.
      const copiedState = state.slice()
      copiedState.push(action.text)
      return copiedState
    }
    default : {
      return state
    }
  }
}

const store = createStore(todos)

store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch({ type: 'ADD_TODO', text: 'Buy eggs' })
store.dispatch({ type: 'ADD_TODO', text: 'Eat eggs' })
store.dispatch({ type: 'ADD_TODO', text: 'Throw away' })
