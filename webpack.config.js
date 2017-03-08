let path = require("path");         // 路径
let webpack = require("webpack");   // webpack 打包文件
let htmlWebpackPlugin = require("html-webpack-plugin"); // 自动产出html的模板文件


let config = {
    // 入口文件
    entry:path.resolve(__dirname, "./src/index.js"),
    // 输出的目标位置及生成自定文件
    output:{
        // 生成一个文件夹目录
        path:path.resolve(__dirname, "dist"),
        //  生成一个自定义的文件做为引用的
        filename:"bundle.js"
    },
    // 配置devServer服务器
    devServer:{
        contentBase:"dist",
        inline:true,
        port:8080,
        stats:{
            colors:true
        }
    },
    // 配置加载的文件
    module:{
        // 里是一个数组的的写法，多个的配置
        loaders:[
            {
                // 所有的js文件
                test:/\.js$/,
                // 使用es6来进行加载
                loader:"babel-loader",
                // 排出不需要使用和处理，和被改变的文件
                exclude:/node_modules/
            },
            {
                // 配置css加载的文件
                test:/\.css$/,
                loader:"style!css",
                include:path.resolve(__dirname, "src")
            },
            {
                // 配置css加载的文件
                test:/\.less$/,
                loader:"style!css!less",
                include:path.resolve(__dirname, "src")
            }
        ]
    },

    // 自动产出html的模板文件
    plugins:[
        new htmlWebpackPlugin({
            // title 是对html文件的titl进行传递和修改
            title:"搭建前端工作流",
            // 做为一个模版文件
            template:"./src/index.html"
        })
    ]

}

// 导出为外部调用的文件
module.exports = config;
