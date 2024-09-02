const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        'productName': '芯片测试数据分析'
        //此处表示打包后的桌面应用程序的名字，可以是中文
      }
    }
  }
})
