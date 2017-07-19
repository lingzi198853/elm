<template>
    <div class="foodentry-wrapper">
      <!-- 获取用户位置时友好显示图片 -->
      <img v-if="!foodArr.length" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCA0OTAiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2NDg5SDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9IjEiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDEgMCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnPjx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPjx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2IiLz48L2c+PGcgZmlsbD0iI0Y2RjZGNiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzYgMzYpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0NiAzNikiPjxwYXRoIGQ9Ik05IDEzOWgxMDB2MzRIOXoiLz48ZWxsaXBzZSBjeD0iNTkiIGN5PSI1OSIgcng9IjU5IiByeT0iNTkiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjE2IDM2KSI+PHBhdGggZD0iTTkgMTM5aDEwMHYzNEg5eiIvPjxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4ODYgMzYpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjwvZz48ZyBmaWxsPSIjRjZGNkY2Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0NiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxNiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg4NiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjwvZz48L2c+PC9zdmc+" class="shellAnimation">
      <!-- 获取到用户位置后展示栏目列表 -->
      <swiper v-else :options="swiperOption">
        <swiper-slide v-for="(item, index) in foodArr" :key="index">
          <router-link :to="{path: '/food', query: {geohash, filter_key: getCategoryId(foodItem.link)}}" v-for="foodItem in item" :key="foodItem.id">
            <div class="container"><img :src="imgBaseUrl+foodItem.image_url"></div><span class="title">{{foodItem.title}}</span>
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <h3 class="index-title">推荐商家</h3>
      <shopList :geohash="geohash"></shopList>
    </div>
</template>

<script>
  import shopList from '@/pages/sell/shopList'
  import { mapState } from 'vuex'
  import { getFoodMenu } from '@/pages/service/getData'
  import { imgBaseUrl } from '@/util/env'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default{
    data () {
      return {
        location: true,
        foodArr: [],
        imgBaseUrl,
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true
        }
      }
    },
    mounted () {
      this.initData()
    },
    computed: mapState({ geohash: state => state.site.geohash }),
    methods: {
      initData () {
        getFoodMenu(this.geohash).then((res) => {
          this.foodMenu = res.data
          let emptyArr = []
          for (var i = 0; i <= this.foodMenu.length; i++) {
            emptyArr[i] = this.foodMenu.splice(0, 8)
          }
          this.foodArr = emptyArr
        })
      },
      // 解码url地址，求去restaurant_category_id值
      getCategoryId (url) {
        let urlData = decodeURIComponent(url)
        let filterKey = urlData.split('?')[1].slice(11)
        return filterKey
      }
    },
    watch: {
      geohash (newGeohash) {
        this.initData()
      }
    },
    components: {
      shopList,
      swiper,
      swiperSlide
    }
  }
</script>

<style>
  .foodentry-wrapper {
    min-height: 4.72rem;
    border-bottom: 1px solid #eee;
    background-color: #fff;
  }

  .index-title {
    margin-top: 0.266667rem;
    line-height: 0.906667rem;
    font-weight: 600;
    background-color: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    font-size: 0.4rem;
    padding-left: 0.4rem;
  }

  .index-title svg {
    margin-right: 0.2rem;
    width: 0.333333rem;
    height: 0.333333rem;
    fill: currentColor;
  }

  .index-loadmore {
    text-align: center;
    line-height: 3;
    color: #999;
  }

  .shoplist {
    background-color: #fff;
  }

  .nodatatip {
    margin-top: 4em;
  }

  .section {
    background-color: #fff;
  }
  .swiper-slide {
    overflow: hidden;
    height: 4.72rem;
    background-color: #fff;
    text-align: center;
  }

  .swiper-slide a {
    position: relative;
    float: left;
    margin-top: 0.293333rem;
    width: 25%;
  }

  .swiper-slide img {
    width: 1.066667rem;
    height: 1.066667rem;
    vertical-align: top;
  }

  .swiper-slide .title {
    display: block;
    margin-top: 0.133333rem;
    color: #666;
    font-size: 0.32rem;
  }

  .swiper-slide .service {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    white-space: nowrap;
    background-color: rgba(0, 0, 0, .6);
    color: #fff;
    font-size: 0.24rem;
    line-height: 0.533333rem;
    border-radius: 0 0 0.8rem 0.8rem;
  }

  .swiper-slide .container {
    position: relative;
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
  }

  .swiper-slide .container img {
    width: 100%;
    height: 100%;
  }

  .swiper-slide .mint-swipe-indicator {
    margin: 0 0.066667rem;
  }

  .swiper-slide .mint-swipe-indicator.is-active {
    background-color: #000;
    opacity: .6;
  }
</style>
