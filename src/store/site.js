export const RECORD_ADDRESS = 'RECORD_ADDRESS'
export const SAVE_GEOHASH = 'SAVE_GEOHASH'

export default {
  state: {
    latitude: '',
    longitude: '',
    geohash: ''
  },
  // 记录当前经纬度
  mutations: {
    [RECORD_ADDRESS] (state, { latitude, longitude }) {
      state.latitude = latitude
      state.longitude = longitude
    },
    [SAVE_GEOHASH] (state, geohash) {
      state.geohash = geohash
    }
  },
  // 存储当前经纬度
  actions: {
    [RECORD_ADDRESS] ({ commit }, { latitude, longitude }) {
      commit(RECORD_ADDRESS, { latitude, longitude })
    },
    [SAVE_GEOHASH] ({ commit }, geohash) {
      commit(SAVE_GEOHASH, geohash)
    }
  },
  // 获取存储的经纬度
  getters: {
    doneLatitude: state => state.latitude,
    doneLongitude: state => state.longitude
  }
}
