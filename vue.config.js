const { defineConfig } = require('@vue/cli-service')
// const path = require("path");


module.exports = defineConfig({
  transpileDependencies: true
})



module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title:
        "Weather Forecast",
    },
  }
}
