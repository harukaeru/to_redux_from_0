import { createStore } from 'redux'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'

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
store.dispatch({ type: 'ADD_TODO', text: 'Homo' })


class Foo extends Component {
  render() {
    const { todos, addTodo } = this.props
    return (
      <div onClick={addTodo}>
      {todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: () => dispatch({ type: "ADD_TODO", text: "Foo" })
})

Foo = connect(mapStateToProps, mapDispatchToProps)(Foo)

ReactDOM.render(
  <Provider store={store}>
    <Foo />
  </Provider>,
  document.getElementById("root")
)
