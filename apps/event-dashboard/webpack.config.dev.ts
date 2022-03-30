import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";

import { webpackConfigDevBase } from "@case-system/webpack";

export default (settings: object) => {
  const baseConfig = webpackConfigDevBase(settings);

  return {
    ...baseConfig,
    entry: [path.resolve(__dirname, "src/index.tsx")],
    output: {
      publicPath: "/",
    },
    plugins: [
      ...baseConfig.plugins,
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "templates/index.html"),
      }),
    ],
    resolve: {
      modules: ["node_modules", path.join(__dirname, "..")],
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
  };
};
