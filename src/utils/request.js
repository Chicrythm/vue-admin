import Axios from "axios";

// console.log(process.env.NODE_ENV)

// console.log(process.env.VUE_APP_MYNAME)

const BASEURL = process.env.NODE_ENV === "production" ? "" : "/devApi";


/**
 * create instance interceptors
 */
const instance = Axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 15000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
    // add header info before request
    console.log(config);
    config.headers["userId"] = "123456";
    config.headers["userName"] = "YEZIQING";
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么

    // 拦截器做第二次拦截
    let data = response.data;
    // if the data is not wrong,return new promise
    if (data.resCode != 0) {
      return Promise.reject(data);
    } else {
      return response;
    }

    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
