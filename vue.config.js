module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './': '/',
  // outputDir: 'dist',
  outputDir: process.env.outputDir,
  lintOnSave: true,
  runtimeCompiler: true,
  chainWebpack: () => {},
  configureWebpack: () => {},
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 75, // 换算的基数
            propList: ['*'],
          }),
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://192.168.1.119:8088/uajax',
        target: 'http://49.233.174.102:8089/uajax',
        ws: true,
        secure:false,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/profile': {
        // target: 'http://192.168.1.119:8088/uajax',
        target: 'http://49.233.174.102:8089/profile',
        ws: true,
        secure:false,
        changOrigin: true,
        pathRewrite: {
          '^/profile': ''
        }
      }
    }
  }

}
