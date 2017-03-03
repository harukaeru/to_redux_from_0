module.exports = {
  entry: './hello.js',
  output: {
    filename: './output/hello.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  }
}
