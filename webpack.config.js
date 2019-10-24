const path = require('path');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  context: srcPath,
  mode: 'development',
  /* mode: 'production', */
  resolve: {
    alias: {
      states: path.resolve(srcPath, 'states'),
      utilities: path.resolve(srcPath, 'utilities'),
      components: path.resolve(srcPath, 'components'),
      api: path.resolve(srcPath, 'api')
    }
  },
  entry: {
    index: './index.jsx',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: distPath,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env', {
                  modules: false
                }
              ],
              '@babel/preset-react'
            ],
            plugins: [
              'babel-plugin-transform-class-properties',
              // 'transform-object-rest-spread',
              // '@babel/plugin-proposal-object-rest-spread'
            ]
          }
        }
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options : {
              url: false
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      minChunks: 2,
      name: 'common'
    },
  },
  devtool: 'cheap-source-map'
};
