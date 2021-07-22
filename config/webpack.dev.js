const webpack = require('webpack')
const path = require('path')

const devConfig = {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname,'../dist'),
    open: true, /* 自动打开浏览器 */
    hot: true,
    historyApiFallback: true,
    publicPath: '/',
    port: 8888, /* 服务器端口 */
    inline: true,
    proxy: {  /* 代理服务器 */
    //   "/api": {
    //     target: "http://localhost:9092"
    //   }
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = devConfig