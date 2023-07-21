const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, '..', 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }],
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                'inline-react-svg', // apply babel-plugin-inline-react-svg
                [
                  'module-resolver', //  apply babel-plugin-module-resolver
                  {
                    alias: {
                      '@': './src',
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: 'file-loader?name=fonts/[name].[ext]!static',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
      favicon: path.resolve(__dirname, '..', './public/icons/favicon.ico'),
    }),
    new Dotenv({ systemvars: true }),
  ],
  stats: 'errors-only',
  devServer: {
    historyApiFallback: true,
  },
}
