const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 8080,
    open: 'chrome'
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [

  ],
  module: {
    rules: [
      
    ]
  }
});