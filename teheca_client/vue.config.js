const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  configureWebpack: {
    devServer: {
      allowedHosts: "all",
      proxy: {
        "/api": {
          target: "http://localhost:7000",
        },
      },
    },
  },
};
