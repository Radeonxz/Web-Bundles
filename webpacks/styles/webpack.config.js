const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // mode: process.env.NODE_ENV || "production",
  mode: "development",

  plugins: [new MiniCssExtractPlugin()],

  module: {
    rules: [
      {
        // sass/scss, css
        test: /\.(s[ac]|c)ss$/i,
        // use: ["style-loader", "css-loader", "sass-loader"]
        // extract css instead of inline css
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      }
    ]
  },

  devtool: "source-map"

  // resolve: {
  //   extensions: [".ts", ".js"]
  // }
};
