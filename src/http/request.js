import axios from 'axios'

export function request(config) {

    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    //2.axios的拦截器
    // 2.1请求拦截
    instance.interceptors.request.use(configs => {

        // 1.比如config中的一些信息不符合服务器要求
        // 2.每次发送网络请求会显示一个图标（加动画）
        // 3.某些请求需要添加信息（token）
        // console.log(config)
        return configs
    }, err => {

        return err
    })
    // 2.2响应拦截
    instance.interceptors.response.use(res=>{

        return res
    },err=>{

    })

    //3.发送真正的网络请求(本身使用promise封装的)
    return instance(config)
}

