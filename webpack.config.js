const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        // image-minimizer-webpack-plugin doesn't require a separate loader
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/assets/images/logo.jpg",
      inject: true,
      scriptLoading: "defer",
    }),
    new ImageMinimizerPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminGenerate,
        options: {
          plugins: [
            ["mozjpeg", { quality: 75 }],
            ["pngquant", { quality: [0.65, 0.90], speed: 4 }],
            ["gifsicle", { interlaced: false }],
            ["webp", { quality: 75 }],
          ],
        },
      },
    }),
  ],
  devServer: {
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    historyApiFallback: true,
    port: 3001,
    open: true,
  },
  mode: "development",
  devtool: "inline-source-map",
};
