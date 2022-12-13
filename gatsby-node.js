const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@base": path.resolve(__dirname),
        "@components": path.resolve(__dirname, "src/components"),
        "@static": path.resolve(__dirname, "static")
      }
    }
  });
}