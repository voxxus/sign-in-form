const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'media/[hash][ext][query]',
    clean: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },

  devtool: 'source-map',

  devServer: {
    static: './public',
    hot: true,
    watchFiles: ['./src/index.html'],
  },

  plugins: [
    new HtmlWebpackPlugin({ title: 'Register & Login UI Kit', template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: 'css/main.css' }),
    new ESLintWebpackPlugin({ emitWarning: false, emitError: false }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
