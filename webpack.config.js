const path = require('path');

module.exports = {
  entry: './src/js/index.js',

  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/js'), // dealt with by gulp
  },
  
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  // Plugins
  plugins: [],
  
  // OPTIONAL
  // Reload On File Change
  // watch: true,
  // Development Tools (Map Errors To Source File)
  devtool: 'source-map'

};
