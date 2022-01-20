const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtraPlugin = require("mini-css-extract-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3002,
    hot: "only",
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtraPlugin.loader,
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif|ico)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "store",
      // library: { type: "var", name: "store" },
      filename: "remoteEntry.js",
      exposes: {
        "./api": "./src/services/api",
        "./store": "./src/store",
      },
      remotes: {},
      shared: {
        ...deps,
        react: { singleton: true, requiredVersion: deps.react, eager: true },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
          eager: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new CompressionPlugin(), // compress builds
    new MiniCssExtraPlugin(),
  ],
  devtool: "cheap-module-source-map", // 'eval' is not supported by error-overlay-webpack-plugin
};
