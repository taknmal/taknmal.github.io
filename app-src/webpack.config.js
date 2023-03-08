const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
  devServer: {
    publicPath: '/',
    hot: true,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    },
    disableHostCheck: true,
    host: '0.0.0.0',
    port:8081,
  },
  entry: './src/index.js',
  mode: 'development',
  resolve: {
    extensions: ['.dev.js', '.js', '.json', '.wasm'],
    fallback: {
      crypto: false,
      path: false,
      fs: false
    }
  },
  module: {
    rules:[
            {
                test:/\.(css|wasm|wasm.js)$/,
                loader:'file-loader',
                options: {
                  name: '[name].[ext]'
                }
            },
            {
              test:/(sw\.js|app\.js)$/,
              loader:'file-loader',
              options: {
                name: '[name].[ext]'
              }
            },
            {
              test:/sponson\.html$/,
              loader:'file-loader',
              options: {
                name: '[name].[ext]'
              }
            },
            {
              test: /\.(pdf|txt)$/,
              include: path.resolve(__dirname, "src"),
              type: "asset/resource",
              generator: {
                filename: "assets/[name][ext]",
              },
            },
            {
              test:/\.(png|jpg|jpeg)$/,
              loader:'file-loader',
              options: {
                name: 'assets/[name].[ext]',
              }
            },
            {
              test:/\.(webmanifest)$/,
              loader:'file-loader',
              options: {
                name: 'assets/[name].[ext]',
              }
            }
       ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
};
