// 配置vue项目  注意事项：修改完配置需要重新启动项目才能生效
module.exports = {
    publicPath:"./",
    devServer: {
        host: "localhost",
        port: "9527",
        open: true,  //自动在浏览器打开
        proxy:{ //配置跨域请求
            '/api':{    //使用数据请求的时候用 /api代替https://x.dscmall.cn/api
                target:"https://x.dscmall.cn/api",//配置要代理的域名
                changeOrigin:true,//允许跨域
                pathRewrite:{  //路径重写
                    "^/api":""
                }
            }
        }
    }
}