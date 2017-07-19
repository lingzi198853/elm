import axios from 'axios'
import {baseUrl} from '../../util/env'

// user
function getUser () {
  var config = {
    method: 'post',
    url: baseUrl + '/v1/user'
  }
  return axios(config).then((res) => {
    return res.data
  })
}
// get userLocation
function getLocation (geohash) {
  var config = {
    method: 'get',
    url: baseUrl + '/v2/pois/' + geohash
  }
  return axios(config)
}

// searchPosition
function searchPosition (value) {
  var config = {
    method: 'get',
    url: baseUrl + 'bgs/poi/search_poi_nearby',
    params: {
      keyword: value,
      offset: 0,
      limit: 20
    }
  }
  return axios(config)
}

// get weather
function getWeather (latitude, longitude) {
  var config = {
    method: 'get',
    url: baseUrl + '/bgs/weather/current',
    params: {
      latitude: latitude,
      longitude: longitude
    }
  }
  return axios(config)
}

// get hotSearchWord
function getSearchWord (latitude, longitude) {
  var config = {
    method: 'get',
    url: baseUrl + '/shopping/v3/hot_search_words',
    params: {
      latitude: latitude,
      longitude: longitude
    }
  }
  return axios(config)
}

// get foodMenu
function getFoodMenu (geohash) {
  var config = {
    method: 'get',
    url: baseUrl + '/v2/index_entry',
    params: {
      geohash: geohash,
      group_type: 1,
      'flags[]': 'F'
    }
  }
  return axios(config)
}

// get searchShops
function getSearchShops (latitude, longitude, num, keyword, type) {
  var config = {
    method: 'get',
    url: baseUrl + '/shopping/v1/restaurants/search',
    params: {
      latitude: latitude,
      longitude: longitude,
      keyword: keyword,
      offset: num,
      search_item_type: type,
      limit: 20,
      'extras[]': 'activities'
    }
  }
  return axios(config)
}

// get category
function getCategory (latitude, longitude) {
  var config = {
    method: 'get',
    url: baseUrl + '/shopping/v2/restaurant/category',
    params: {
      latitude: latitude,
      longitude: longitude
    }
  }
  return axios(config)
}
// function getCategory (latitude, longitude, aParams) {
//   var oParams
//   if (aParams) {
//     oParams = {
//       latitude: latitude,
//       longitude: longitude,
//       'flavor_ids[]': aParams[0],
//       show_name: aParams[1]
//     }
//   } else {
//     oParams = {
//       latitude: latitude,
//       longitude: longitude
//     }
//   }
//   var config = {
//     method: 'get',
//     url: baseUrl + '/shopping/restaurant/category/urlschema',
//     params: oParams
//   }
//   return axios(config)
// }
// get activity support
function getActivityDelivery (latitude, longitude) {
  var config = {
    method: 'get',
    url: baseUrl + '/shopping/v1/restaurants/delivery_modes',
    params: {
      latitude: latitude,
      longitude: longitude
    }
  }
  return axios(config)
}
// get activity support
function getActivitySupport (latitude, longitude) {
  var config = {
    method: 'get',
    url: baseUrl + '/shopping/v1/restaurants/activity_attributes',
    params: {
      latitude: latitude,
      longitude: longitude
    }
  }
  return axios(config)
}

// get shopList
function shopList (latitude, longitude, keyword, num, restaurantCategoryIds, orderBy, supportIds, deliveryMode) {
  let supportStr = ''
  if (supportIds !== undefined) {
    supportIds.forEach((item) => {
      if (item.status) {
        supportStr += '&support_ids[]=' + item.id
      }
    })
  }
  var config = {
    method: 'get',
    url: baseUrl + '/shopping/restaurants' + supportStr,
    params: {
      latitude: latitude,
      longitude: longitude,
      keyword: null,
      offset: num,
      limit: 20,
      'extras[]': 'activities',
      'restaurant_category_ids[]': restaurantCategoryIds,
      order_by: orderBy,
      'delivery_mode[]': deliveryMode
    }
  }
  return axios(config)
}

function getShopDetailData (id, latitude, longitude) {
  let extras = 'extras[]=activities&extras[]=album&extras[]=license&extras[]=identifcation&extras[]=statistics'
  var config = {
    method: 'get',
    url: baseUrl + '/shopping/restaurant/' + id + '?' + extras,
    params: {
      latitude: latitude,
      longitude: longitude
    }
  }
  let result = axios(config).then((res) => {
    return res.data
  })
  return result
}

var goodsData = {
  goodsMenu: function (id) {
    var config = {
      method: 'get',
      url: baseUrl + 'shopping/v2/menu',
      params: {
        restaurant_id: id
      }
    }
    let result = axios(config).then((res) => {
      return res.data
    })
    return result
  }
}

export { getUser, getLocation, searchPosition, getWeather, getSearchWord, getFoodMenu, getSearchShops, getCategory, getActivityDelivery, getActivitySupport, shopList, getShopDetailData, goodsData }
