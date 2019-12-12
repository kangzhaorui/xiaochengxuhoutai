// api/user.js
import { axios } from '@/utils/request';

// 用户登录
export function userLogin (data) {
  return axios({
      url: '/public/login',
      method: 'post',
      data
  })
}

// 用户退出
export function userLogout (data) {
  return axios({
      url: '/public/logout',
      method: 'post',
      data
  })
}