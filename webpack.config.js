const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 创建插件的事例对象
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'),
  filename: 'index.html'
})
// webpack默认只能处理.js类型文件，其他类型需要第三方模块
module.exports = {
  mode: 'development', // development, production(自动压缩代码)
  // 在webpack4.x，默认约定打包入口 src/index.js， 打包输入文件路径dist/main.js
  // plugins
  plugins: [
    htmlWebpackPlugin
  ],
  // 所有第三方模块的配置规则
  module: {
    rules: [ // 第三方规则
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', 'jsx', 'json'],
    alias: { // 表示别名
      '@': path.join(__dirname, './src')
    }
  }
}
