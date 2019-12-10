module.exports = {
  entry: './src/main.js',
  //entry: './modulo-2/exercicio-1.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',

  },
  devServer:{
    contentBase: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}