module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2017', 'react']
        }
      }
    ]
  },
  resolve: {
    // これでrequire('file.coffee')の代わりにrequire('file')を使えるようになります
    extensions: ['', '.js', '.json', '.coffee']
  }
};
