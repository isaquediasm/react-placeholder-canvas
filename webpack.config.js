const webpack = require('webpack');
var path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  return {
    entry: {
      main:
        argv.mode === 'production' ? './src/index.js' : './src/index.dev.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: ['react-hot-loader/babel'],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: { minimize: true },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        'styled-components': path.resolve('node_modules/styled-components'),
      },
      modules: ['src', 'node_modules'],
      extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebPackPlugin({
        template: './src/public/index.html',
        filename: './index.html',
      }),
    ],
    devServer: {
      contentBase: './dist',
      hot: true,
    },
  };
};
