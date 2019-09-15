 const path = require('path');
 const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 const HtmlWebPackPlugin = require('html-webpack-plugin');
 const webpack = require("webpack");

 module.exports = {
   entry: './src/index.js',
   module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
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
      })
   ],
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist/'),
   }
 };
 