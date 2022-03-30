import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";

import { webpackConfigBase } from "@case-system/webpack";

const outputPath = path.join(__dirname, "dist", "bundled");

export default {
  ...webpackConfigBase,
  entry: {
    main: path.resolve("dist", "compiled", "index.js"),
  },
  output: {
    filename: "[name].[hash].js",
    path: outputPath,
  },
  plugins: [
    ...webpackConfigBase.plugins,
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "templates/index.html"),
    }),
  ],
  mode: "production",
};
