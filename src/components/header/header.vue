<template>
  <header class="index-3O8rT">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
      <defs>
        <symbol viewBox="0 0 26 31" id="location">
          <path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path>
        </symbol>
        <symbol viewBox="0 0 14 8" id="arrow">
          <path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path>
        </symbol>
        <symbol viewBox="0 0 28 33" id="arrow-left">
          <path fill-rule="evenodd" d="M17.655 1.853L15.961.159.033 16.072 15.961 32l1.694-1.694L3.429 16.08 17.655 1.854z" class="path1"></path>
        </symbol>
        <symbol viewBox="0 0 32 31" id="shop">
          <g fill-rule="evenodd">
            <path d="M28.232 1.822C27.905.728 26.97.152 25.759.152H5.588c-1.252 0-1.867.411-2.397 1.415l-.101.243-.443 1.434-.975 3.154-.002.007C.837 9.101.294 10.854.26 10.956l-.059.259c-.231 1.787.337 3.349 1.59 4.448 1.159 1.017 2.545 1.384 3.865 1.384.07 0 .07 0 .132-.002-.01.001-.01.001.061.002 1.32 0 2.706-.367 3.865-1.384a4.96 4.96 0 0 0 .413-.407l-1.043-.946-1.056.931c1.033 1.171 2.51 1.792 4.21 1.801.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384.148-.13.287-.267.418-.411l-1.044-.944-1.057.93c1.033 1.174 2.511 1.796 4.213 1.806.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384.15-.131.29-.27.422-.416l-1.046-.943-1.058.929c1.033 1.177 2.513 1.801 4.218 1.811.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384 1.206-1.058 1.858-2.812 1.676-4.426-.069-.61-.535-2.207-1.354-4.785l-.109-.342a327.554 327.554 0 0 0-1.295-3.966l-.122-.366.014.043h.004zm-2.684.85l.12.361.318.962c.329.999.658 2.011.965 2.973l.108.338c.719 2.262 1.203 3.92 1.24 4.249.08.711-.233 1.553-.735 1.993-.553.485-1.308.685-2.008.685l-.098-.002c-.987-.007-1.695-.306-2.177-.854l-1.044-1.189-1.06 1.175a2.192 2.192 0 0 1-.188.185c-.553.485-1.308.685-2.008.685l-.098-.002c-.985-.007-1.693-.305-2.174-.852l-1.043-1.185-1.059 1.171c-.058.064-.12.125-.186.183-.553.485-1.308.685-2.008.685l-.098-.002c-.984-.007-1.692-.304-2.173-.85L9.101 12.2l-1.058 1.166a2.248 2.248 0 0 1-.184.181c-.553.485-1.307.685-2.008.685l-.061-.001-.131.001c-.701 0-1.455-.2-2.008-.685-.538-.472-.767-1.102-.654-1.971l-1.396-.18 1.338.44c.043-.13.552-1.775 1.425-4.599l.002-.007.975-3.155.443-1.434-1.345-.415 1.245.658c.054-.102.042-.085-.083-.001-.122.082-.143.086-.009.086H25.763c.053 0-.164-.133-.225-.339l.014.043-.004-.001zM5.528 19.48c.778 0 1.408.63 1.408 1.408v7.424a1.408 1.408 0 1 1-2.816 0v-7.424c0-.778.63-1.408 1.408-1.408z"></path>
            <path d="M.28 29.72c0-.707.58-1.28 1.277-1.28h28.155a1.28 1.28 0 0 1 .007 2.56H1.561A1.278 1.278 0 0 1 .28 29.72z"></path>
            <path d="M26.008 19.48c.778 0 1.408.63 1.408 1.408v7.424a1.408 1.408 0 1 1-2.816 0v-7.424c0-.778.63-1.408 1.408-1.408z"></path>
          </g>
        </symbol>
      </defs>
    </svg>
    <div class="index-MAORp">
      <div class="index-3vsmj" @click="goSearchSite()">
        <svg class="index-3guVd">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
        </svg>
        <span class="index-1cnKa">{{locationTitle}}</span>
        <svg class="index-9eIfV">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use>
        </svg>
      </div>
      <aside class="index-2LvmP">
        <div>
          <h2 class="index-17uRU">{{weather.temperature}}°</h2>
          <p class="index-3-P-K">{{weather.description}}</p>
        </div>
        <img class="index-wRPUE" alt="天气图标" :src="imgUrl"></aside>
    </div>
    <form action="">
      <input type="text" placeholder="搜索商家、商品" class="index-20Oji"></form>
    <div class="index-6hVEQ">
      <router-link :to="'/shop?keyword='+encodeURI(item.word)" v-for="item in searchWord" :key="item.id">{{item.word}}</router-link>
    </div>
    <!-- 用户输入搜索地址 -->
     <searchSitePage @toggle="show" :togglesitePage="togglesitePage" v-show="togglesitePage"></searchSitePage>
  </header>
</template>

<script>
  import { mapActions } from 'vuex'
  import searchSitePage from '@/pages/msite/getLocation'
  import ngeohash from 'ngeohash'
  import { getLocation, getWeather, getSearchWord } from '@/pages/service/getData'
  import { imgBaseUrl } from '@/util/env'
  import { getStore } from '@/util/localStore'

  export default {
    data () {
      return {
        togglesitePage: false, // 默认隐藏地址搜索列表
        locationTitle: '获取地址中...',
        latitude: '',
        longitude: '',
        getSiteState: null,
        siteData: {},
        imgBaseUrl: '',
        searchWord: [],
        weather: '',
        imgUrl: ''
      }
    },
    created () {
      this.getWeatherData()
    },
    beforeMount () {
      this.getSiteStore()
    },
    methods: {
      // 获取localstorage里的位置信息
      async getSiteStore () {
        if (getStore('STORE')) {
          let store = JSON.parse(getStore('STORE'))
          this.latitude = store.location.latitude
          this.longitude = store.location.longitude
          this.geohash = store.location.geohash
          if (this.geohash === '') {
            this.geohash = ngeohash.encode(this.latitude, this.longitude)
          }
        } else {
          // this.geohash = 'wtw3sm0q087'
          this.$root.eventHub.$emit('site', this.getSiteState = false)
        }
        // 保存geohash 到 vuex
        this.SAVE_GEOHASH(this.geohash)
        // 获取位置信息
        await this.getsite()
        // 保持经纬度 到 vuex
        this.RECORD_ADDRESS(this.siteData)
      },
      async getsite () {
        await getLocation(this.geohash).then((res) => {
          this.siteData = res.data
          this.locationTitle = this.siteData.name
          this.$root.eventHub.$emit('inc', this.locationTitle)
        })
      },
      goSearchSite () {
        this.togglesitePage = !this.togglesitePage
      },
      show (togglesitePage, locationTitle) {
        this.togglesitePage = togglesitePage
        this.locationTitle = locationTitle
      },
      // 获取天气数据
      getWeatherData () {
        getWeather(this.latitude, this.longitude).then((res) => {
          this.weather = res.data
          let img = this.weather.image_hash
          this.imgUrl = imgBaseUrl + img.slice(0, 1) + '/' + img.slice(1, 3) + '/' + img.slice(3) + '.png'
        })
      },
      getSWData () {
        getSearchWord(this.latitude, this.longitude).then((res) => {
          this.searchWord = res.data
        })
      },
      ...mapActions([
        'RECORD_ADDRESS', 'SAVE_GEOHASH'
      ])
    },
    watch: {
      locationTitle (newLocationTitle) {
        this.getSiteStore()
        this.getWeatherData()
        this.getSWData()
      }
    },
    components: {
      searchSitePage
    }
  }
</script>

<style>
  
</style>
