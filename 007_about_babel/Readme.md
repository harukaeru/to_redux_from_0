```javascript
$ yarn add babel-cli babel-preset-env --dev
```

create babel config file

- .babelrc
```json
{
  "presets": ["env"]
}
```

```sh
$ ./node_modules/.bin/babel *.js -d output
```

```sh
$ cd output
$ node hello.js
```
