/**
 * /* config-overrides.js
 *
 * @format
 */

const { override, addWebpackModuleRule,overrideDevServer } = require("customize-cra");
module.exports = {
  webpack:override(
    addWebpackModuleRule({
      test: /\.md?$/,
      use: [
        {
          loader: "html-loader",
        },
        {
          loader: "markdown-loader",
        },
      ],
    })
  ),
  devServer: overrideDevServer(
  //  {port:8088}
  )
}
// module.exports = override(
//   addWebpackModuleRule({
//     test: /\.md?$/,
//     use: [
//       {
//         loader: "html-loader",
//       },
//       {
//         loader: "markdown-loader",
//       },
//     ],
//   })
// );
