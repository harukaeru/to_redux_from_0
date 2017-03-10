# Concept
![](https://camo.githubusercontent.com/e7921fdb62c3bab89005e090677a6cd07aceaa8c/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f434e50336b5953577741455672544a2e6a70673a6c61726765)
qouted from https://github.com/reactjs/redux/issues/653

Japanese explanation page -> http://heppoko.hatenadiary.jp/entry/2017/02/21/210155

# Read todo.js
That's all except you must copy states in reducers.

```javascript
const copiedState = state.slice()
copiedState.push(action.text)
return copiedState
```

