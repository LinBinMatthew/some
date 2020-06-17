const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: { // 入口
    app: './src/index.js'
  }, 
  output: {  // 出口
    filename: '[name].bundle.js',  // 打包之后脚本文件名称，name是entry的属性
    path: path.resolve(__dirname, 'dist'),  //路径指向执行 js 文件的绝对路径 此处为/dist
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true,
    host: '0.0.0.0',
    port: '8080',
    disableHostCheck: true
  },
  plugins: [
    new CleanWebpackPlugin(), // 要删除的正是output.path
    new HtmlWebpackPlugin({
      title: 'webpack_demo'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,  //检测正则匹配.css结尾的文件
        use: [   //使用俩个loader
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/, //正则匹配.png svg jpg gif结尾的文件
        use: [   //使用file-loader
          'file-loader'
        ]
      }
    ]
  }
}