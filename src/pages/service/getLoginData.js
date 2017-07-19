import axios from 'axios'
import {baseUrl} from '../../util/env'

function checkLoginData () {
  var config = {
    method: 'get',
    url: baseUrl + '/eus/v1/current_user?info_raw={}'
  }
  return axios(config).then((res) => {
    return res.data
  })
}
function postLoginData (number, code, tokenid) {
  var config = {
    method: 'post',
    url: baseUrl + '/v1/login/app_mobile',
    data: {
      number,
      code,
      tokenid
    }
  }
  return axios(config)
}
function getUserData (userId) {
  var config = {
    method: 'get',
    url: baseUrl + '/eus/v1/users/' + 221250110
  }
  return axios(config).then(res => {
    return res.data
  })
}
function getVerifyData (number, mobile) {
  var config = {
    method: 'get',
    url: baseUrl + '/v1/users/exists?mobile=' + number + '&type=' + mobile
  }
  return axios(config).then((res) => {
    return res.data
  })
}
function postVerifyData (number) {
  var config = {
    method: 'post',
    url: baseUrl + '/v4/mobile/verify_code/send',
    data: {
      mobile: number,
      scene: 'login',
      type: 'sms'
    }
  }
  return axios(config)
}

export { checkLoginData, postLoginData, getUserData, getVerifyData, postVerifyData }
