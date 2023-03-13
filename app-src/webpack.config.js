const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
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
    port:8083,
  },
  entry: './src/index.js',
  mode: 'development',
  resolve: {
    extensions: ['.dev.js', '.js', '.json', '.wasm', 'jsx', 'tsx'],
    fallback: {
      crypto: false,
      path: false,
      fs: false
    }
  },
  module: {
    rules:[
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_module/,
                use: 'babel-loader'
            },
            {
              test: /\.vue$/,
              exclude: /node_module/,
              use: 'vue-loader'
          },
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
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new VueLoaderPlugin()
  ]
};
