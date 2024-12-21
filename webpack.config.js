const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point for your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Bundled output file
    clean: true, // Cleans the output directory before each build
    publicPath: "/", // Ensures correct routing for React Router
  },
  module: {
    rules: [
        {
          test: /\.jsx?$/, // Matches .js and .jsx files
          exclude: /node_modules/, // Excludes node_modules
          use: {
            loader: "babel-loader", // Transpiles modern JavaScript and JSX
          },
        },
        {
          test: /\.css$/, // Matches CSS files
          use: ["style-loader", "css-loader"], // Injects styles into the DOM
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i, // Matches image files
          type: "asset/resource", // Handles image assets
        },
        {
          test: /\.html$/, // Matches HTML files
          use: "html-loader", // Processes HTML files
        },
      ],

  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolves these extensions automatically
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // HTML template for the application
      favicon: './src/assets/images/logo.jpg', // Path to your favicon

    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serves static files from 'dist'
    },
    compress: true, // Enables Gzip compression for better performance
    historyApiFallback: true, // Redirects all 404s to index.html for React Router
    port: 3001, // Development server port
    open: true, // Automatically opens the app in the default browser
   allowedHosts: ['20.192.98.162'],

  },
  mode: "development", // Sets development mode
};
