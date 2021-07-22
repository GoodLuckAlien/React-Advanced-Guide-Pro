const TerserPlugin = require('terser-webpack-plugin');
const proConfig = {
    devtool: 'cheap-module-source-map',
    mode: 'production',
    optimization: {
      minimizer: [
          new TerserPlugin({
              cache: true, // 开启缓存
              parallel: true, // 支持多进程
              sourceMap: true
          })
      ]
    }
  }

module.exports = proConfig