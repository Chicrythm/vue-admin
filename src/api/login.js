import instance from "../utils/request";

export function GetSms(data){
    instance.request({
        method: 'post',
        url: '/getSms/',
        data
    })
}
