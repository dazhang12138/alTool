import axios from "axios";
import {Toast} from "@douyinfe/semi-ui";

const saveaxios = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 5000,
    headers: {'Content-Type': 'application/json','Accept':'*/*','Accept-Encoding':'gzip, deflate, br','Connection':'keep-alive'}
})


/**
 * 查询接口 post调用
 * @param url 接口地址 /开头
 * @param data 参数
 * @param callback 成功后回调
 */
export function post(url: string,data: any,callback: (data: any)=>{}){
    saveaxios.post(url, data)
        .then(function (response) {
            callback && callback(response.data);
        })
        .catch(function (error) {
            Toast.error(error);
        });
}

/**
 * 查询接口 get调用
 * @param url 接口地址 /开头
 * @param data 参数
 * @param callback 成功后回调
 */
export function get(url: string,data: any,callback: (data: any)=>void){
    saveaxios({url:url,params:data})
        .then(function (response) {
            callback && callback(response.data);
        })
        .catch(function (error) {
            Toast.error(error);
        });
}