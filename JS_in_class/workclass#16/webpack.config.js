const path = require("path");
const extractTextPlugin = require("extract-text-webpack-plugin");

const conf = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist/"
  },
  devServer: {
    overlay: true
  },
  devtool: " eval-sourcemap",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [new extractTextPlugin("style.css")]
};

module.exports = (env, options) => {
  let isProd = options.mode === "production";
  console.log(env);
  conf.devtool = isProd ? false : "eval-sourcemap";
  return conf;
};
