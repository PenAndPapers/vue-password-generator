var path = require('path')

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@element': path.resolve(__dirname, 'src/components/element'),
        '@common': path.resolve(__dirname, 'src/components/common'),
        '@layout': path.resolve(__dirname, 'src/components/layout'),
        '@module': path.resolve(__dirname, 'src/components/module'),
        '@skeleton': path.resolve(__dirname, 'src/components/skeleton'),
        '@directives': path.resolve(__dirname, 'src/directives'),
        '@mixins': path.resolve(__dirname, 'src/mixins'),
        '@plugins': path.resolve(__dirname, 'src/plugins')
      }
    }
  },
  pwa: {
    name: 'Password Generator',
    themeColor: '#35485e',
    manifestOptions: {
      background_color: '#40b882'
    }
  }
}
