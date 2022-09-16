import Axios from "axios"
import { DOMAIN, TOKEN, TokenCyberSoft } from "../util/setting"



// const https = Axios.create({
//     baseURL: DOMAIN,
//     timeout: 30000,
// })
// https.interceptors.request.use((config) => {
//     config.headers = {
//         ...config.headers,
//         'accept': 'application/json',
//         // 'Access-Control-Allow-Origin':'*',
//         'TokenCyberSoft': TokenCyberSoft,
//         'Authorization' : `${localStorage.getItem(TOKEN) ? `${`Bearer ${ localStorage.getItem(TOKEN)}`}` :'' }` //Token mà người dùng đăng nhập
//     }
//     return config
// }, (errors) => {
//     return Promise.reject(errors)
// });
// export default https;
const https = Axios.create({
    baseURL: DOMAIN,
    timeout: 30000,
  });
  
  https.interceptors.request.use((config) => {
    config.headers = {
      TokenCybersoft:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzEiLCJIZXRIYW5TdHJpbmciOiIyOS8xMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NzIyNzIwMDAwMDAiLCJuYmYiOjE2NDU5ODEyMDAsImV4cCI6MTY3MjQxOTYwMH0.SZe3CJl1OkNH-0zfzqOV0CSC8WZ6q2hw64UykpCytT0",
      Authorization: localStorage.getItem("HV")
        ? `Bearer ${JSON.parse(localStorage.getItem("HV")).accessToken}`
        : localStorage.getItem("GV")
        ? `Bearer ${JSON.parse(localStorage.getItem("GV")).accessToken}`
        : "",
    };
    return config;
  });
  
  export default https;

//     put = (url, model) => {
//         return Axios({
//             url: `${DOMAIN}${url}`,
//             method: 'PUT',
//             data: model,
//             headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
//         })
//     }

//     post = (url, model) => {
//         return Axios({
//             url: `${DOMAIN}${url}`,
//             method: 'POST',
//             data: model,
//             headers: {TokenCyberSoft,
//                  'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
//         })
//     }


//     get = (url) => {
//         console.log(url)
//         return this.https.get(url);
//     }

//     delete = (url) => {
//         return Axios({
//             url: `${DOMAIN}${url}`,
//             method: 'DELETE',
//             headers: { TokenCyberSoft,
//                 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
//         })
//     }
// }