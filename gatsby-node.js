const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@base": path.resolve(__dirname),
        "@components": path.resolve(__dirname, "src/components"),
        "@lib": path.resolve(__dirname, "lib"),
        "@static": path.resolve(__dirname, "static")
      }
    }
  });
}