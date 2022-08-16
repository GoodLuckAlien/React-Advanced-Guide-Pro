const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require("happypack");
const merge = require("webpack-merge");
const devConfig = require("./webpack.dev");
const proConfig = require("./webpack.pro");
const webpack = require("webpack");

const Appconfig = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json",
    ] /* 这几个后缀名的文件后缀可以省略不写 */,
    alias: {
      "@": path.join(__dirname, "./src") /* @就表示根目录src这个路径 */,
    },
  },
  module: {
    unknownContextCritical: false,
    rules: [
      {
        test: /\.css$/,
        use: [
          "css-hot-loader",
          MiniCssExtractPlugin.loader,
          // 'css-loader?modules',
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "imgs/",
            limit: 2048,
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          "css-hot-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")],
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          "css-hot-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]---[local]---[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("autoprefixer")],
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "../src"),
        use: ["happypack/loader?id=babel"],
        // loader: 'babel-loader'
      },
    ],
  },
  optimization: {
    /* 代码分割 */
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    /* 多线程编译 */
    new HappyPack({
      id: "babel",
      loaders: ["babel-loader?cacheDirectory"],
    }),
  ],
};
module.exports = (env) => {
  if (env && env.production) {
    return merge(Appconfig, proConfig);
  } else {
    return merge(Appconfig, devConfig);
  }
};
