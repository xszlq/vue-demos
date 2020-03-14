// vue.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, dir)
}


const customPages = {
    index: {
        entry: 'src/main.js',
        template: 'public/index.html',
    }
}

for (let i = 0; i < 10; i++) {
    customPages['index' + i] = {
        entry: 'src/main.js',
        template: 'public/index.html'
    }
}


module.exports = {
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    // productionSourceMap: false, // 生产环境的 source map
    pages: customPages,

    chainWebpack: config => {
        //路径配置
        config.resolve.alias
            .set("assets", resolve("src/assets"))
            .set("styles", resolve("src/assets/styles"));
    },

    // webpack-dev-server 相关配置
    devServer: {
        disableHostCheck: true,
        port: 8080, // 端口号
        host: "0.0.0.0",
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
    },
    // publicPath: publicPath,
    // 主题配置
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    "dialog-confirm-button-text-color": "#FF690A"
                }
            }
        }
    }
};
