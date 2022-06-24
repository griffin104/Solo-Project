const path = require('path')

module.exports =  {
  webpackConfig: require('./webpack.config.cjs'),
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper.jsx')
  }
}