 const path = require('path');
 const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 const HtmlWebPackPlugin = require('html-webpack-plugin');
 const webpack = require("webpack");
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 const devMode = process.env.NODE_ENV !== 'production';

 module.exports = {
   entry: "./src/index.js",
   module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
   plugins: [
     new CleanWebpackPlugin(),
     new webpack.HotModuleReplacementPlugin(),
     new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      }),
   ],
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist/'),
   }
 };
 