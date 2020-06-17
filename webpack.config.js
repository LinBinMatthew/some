/*
webpack（号称打包一切）它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一
些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用
webpack把所有的文件打包成一个bundle.js文件，并且是能在浏览器里面直接运行的代码
*/
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  path.join(__dirname, 'src/h5/pages/demo.js'), // 入口文件
    mode:'develop',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
              /*
              *解析和转换 .vue 文件，提取出其中的逻辑代码 script、样式代码 style、以及HTML模版 
              *template，再分别把它们交给对应的 Loader 去处理
              */ 
                test: /.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    // Webpack 在启动后会从配置的入口模块出发找出所有依赖的模块，Resolve 配置 Webpack 如何寻找模块所对应的文件
    resolve: {
      extensions: [ 
        // 在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。  resolve.extensions 用于配置在尝试过程中用到的后缀列表
        '.vue', '.js'
      ],
      modules: ["node_modules"],
      alias: {
        vue: 'vue/dist/vue.min.js',
        components: path.resolve(__dirname + '/src/components/'),
        '@': path.resolve('src')
      }
    },
    plugins:[
      new HtmlWebpackPlugin(),
      new VueLoaderPlugin()
    ],
    devServer: {
      historyApiFallback: { //用于如果找不到界面404就返回默认首页,如果修改了 output.publicPath，就需要指定重定向的URL
        index: `/dist/h5/index.html`
      },
      host: '0.0.0.0',
      disableHostCheck: true // 关闭ip检测，让局域网内其他设备也能访问到项目主机
    }
}
