const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [

    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
    })
]
};