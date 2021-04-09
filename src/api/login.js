import instance from "../utils/request";

/**
 * use interceptor to send the post request
 * @param {*} data 
 */
export function GetSms(data){
    instance.request({
        method: 'post',
        url: '/getSms/',
        data
    })
}
