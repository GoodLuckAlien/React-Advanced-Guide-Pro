const webpack = require("webpack");
const path = require("path");

const devConfig = {
  mode: "development",
  devServer: {
    open: true /* 自动打开浏览器 */,
    hot: true,
    historyApiFallback: true,
    port: 7778 /* 服务器端口 */,
    proxy: {
      /* 代理服务器 */
      //   "/api": {
      //     target: "http://localhost:9092"
      //   }
    },
  },
};

module.exports = devConfig;
