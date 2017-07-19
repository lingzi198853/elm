import { imgBaseUrl } from '@/util/env'

export const getImgPath = {
  methods: {
    getImgPath (imgPath) {
      let shopImgPath
      if (!imgPath) {
        shopImgPath = 'http://test.fe.ptdev.cn/elm/elmlogo.jpeg'
      } else {
        let shopImgPathA = imgPath.slice(0, 1)
        let shopImgPathB = imgPath.slice(1, 3)
        let shopImgPathC = imgPath.slice(3)
        let shopImgType
        if (imgPath.indexOf('jpeg') !== -1) {
          shopImgType = 'jpeg'
        } else {
          shopImgType = 'png'
        }
        shopImgPath = imgBaseUrl + shopImgPathA + '/' + shopImgPathB + '/' + shopImgPathC + '.' + shopImgType + '?imageMogr/format/webp/'
      }
      return shopImgPath
    }
  }
}
