const { DefinePlugin } = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URI': JSON.stringify(process.env.API_URI),
    }),
  ],
  devServer: {
    static: './dist',
    hot: true,
  },
};
