<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
      <defs>
          <symbol viewBox="0 0 1024 1024" id="res-bad">
              <path fill="#D0021B" fill-rule="evenodd" d="M512 0C230.326 0 0 230.326 0 512s230.573 512 512 512 512-230.326 512-512S793.674 0 512 0zM240.694 373.755l158.735-56.285 15.306 46.164L256 419.919l-15.306-46.164zm440.409 384.123c-10.122 0-20.49-10.122-25.674-20.49-10.122-10.122-61.47-25.674-148.366-25.674-86.896 0-138.245 15.306-148.366 25.674 0 10.122-10.122 20.49-25.674 20.49s-25.674-10.122-25.674-25.674c0-71.591 174.041-71.591 194.53-71.591 20.489 0 194.53 0 194.53 71.591 10.122 10.368 0 25.674-15.306 25.674zM768 419.919l-163.672-61.47 15.306-46.164 158.735 56.285-10.368 51.348-.001.001z"></path>
          </symbol>
          <symbol viewBox="0 0 1146 885" id="choose">
              <path d="M1001.309 14.473c18.618-18.618 46.545-18.618 65.164 0l65.164 65.164c18.618 18.618 18.618 46.545 0 65.164L410.182 870.91c-18.618 18.618-46.545 18.618-65.164 0L14.545 545.092c-18.618-18.618-18.618-46.545 0-65.164l65.164-65.164c18.618-18.618 46.545-18.618 65.164 0L377.6 647.491l623.709-633.018z"></path>
          </symbol>
          <symbol viewBox="0 0 982 854" id="notice">
              <path d="M461.467 21.667c-12.8 0-29.867 4.267-51.2 25.6L214 256.334H73.2c-38.4 0-72.533 34.133-72.533 76.8v217.6c0 38.4 34.133 72.533 72.533 72.533H214l192 192c17.067 17.067 38.4 21.333 46.933 21.333 25.6 0 55.467-21.333 55.467-68.267V85.666c8.533-46.933-21.333-64-46.933-64v.001zm-29.867 691.2l-179.2-179.2H86v-192h166.4l174.933-192 4.267 563.2zM649.2.333v102.4C794.267 145.4 888.133 273.4 888.133 427S790 708.6 649.2 751.267v102.4C845.467 811 982 636.067 982 427 982 217.933 841.2 43 649.2.333z"></path>
              <path d="M772.933 427c0-85.333-46.933-162.133-123.733-192v388.267C726 589.134 772.933 512.334 772.933 427z"></path>
          </symbol>
          <symbol viewBox="0 0 547 987" id="arrow-right">
              <path d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path>
          </symbol>
          <symbol viewBox="0 0 20 32" id="arrow-left">
              <path fill="#fff" d="M16.552 5.633l-2.044-2.044L2.243 15.854l12.265 12.557 2.044-2.044L6.331 15.854z"></path>
          </symbol>
          <symbol viewBox="0 0 188 163" id="res-collection">
              <path fill="#272636" fill-rule="evenodd" d="M94.25 26.5C85.75 10.75 69.125 0 50.125 0 22.625 0 .375 22.375.375 50c0 13.125 5 25 13.25 34L90 160.75c1.25 1.125 2.75 1.75 4.25 1.75s3-.625 4.25-1.75L174.875 84C183 75.125 188 63.125 188 50c0-27.625-22.25-50-49.75-50-18.875 0-35.375 10.75-44 26.5zm71.125 49.375l-71.125 72.25-71.125-72.25C16.75 69.125 12.875 60 12.875 50c0-20.75 16.75-37.5 37.25-37.5 16.625 0 31 11 36 26.125 1.25 3.25 4.5 5.625 8.125 5.625 3.75 0 6.875-2.25 8.25-5.5 4.875-15.25 19.125-26.25 35.75-26.25 20.625 0 37.25 16.75 37.25 37.5.125 10-3.75 19.125-10.125 25.875z"></path>
          </symbol>
          <symbol viewBox="0 0 1024 1024" id="res-well">
              <path fill="#7ED321" fill-rule="evenodd" d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0zM247.808 402.432c0-36.864 39.936-93.184 93.184-93.184s93.184 56.32 93.184 93.184c0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48 0-16.384-24.576-52.224-52.224-52.224-27.648 0-52.224 35.84-52.224 52.224 0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48zM512 800.768c-132.096 0-239.616-96.256-239.616-215.04 0-11.264 9.216-20.48 20.48-20.48 11.264 0 20.48 9.216 20.48 20.48 0 96.256 89.088 174.08 198.656 174.08 109.568 0 198.656-77.824 198.656-174.08 0-11.264 9.216-20.48 20.48-20.48 11.264 0 20.48 9.216 20.48 20.48 0 117.76-107.52 215.04-239.616 215.04zm243.712-377.856c-11.264 0-20.48-9.216-20.48-20.48 0-17.408-24.576-52.224-52.224-52.224-28.672 0-52.224 34.816-52.224 52.224 0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48 0-36.864 39.936-93.184 93.184-93.184s93.184 56.32 93.184 93.184c0 11.264-9.216 20.48-20.48 20.48z"></path>
          </symbol>
          <symbol viewBox="0 0 1024 1024" id="res-ordinary">
              <path fill="#febb00" fill-rule="evenodd" d="M670.476 454.548c33.663 0 60.952-27.019 60.952-60.349s-27.289-60.349-60.952-60.349-60.952 27.019-60.952 60.349 27.289 60.349 60.952 60.349zm-316.952 0c33.663 0 60.952-27.019 60.952-60.349s-27.289-60.349-60.952-60.349-60.952 27.019-60.952 60.349 27.289 60.349 60.952 60.349zM0 508.862C0 228.892 226.941 1.931 506.938 1.931h10.125c279.974 0 506.938 226.899 506.938 506.931 0 279.97-226.941 506.931-506.938 506.931h-10.125C226.964 1015.793 0 788.894 0 508.862zm292.571 187.081c0 13.425 10.844 24.14 24.22 24.14h390.417c13.372 0 24.22-10.808 24.22-24.14 0-13.425-10.844-24.14-24.22-24.14H316.791c-13.372 0-24.22 10.808-24.22 24.14z" class="path1 fill-color2"></path>
          </symbol>
          <symbol viewBox="0 0 1024 1024" id="res-x">
              <path fill-rule="evenodd" d="M480.518 512L8.377 984.141c-8.853 8.853-8.777 22.871-.083 31.565 8.754 8.754 22.825 8.656 31.565-.083L512 543.482l472.141 472.141c8.853 8.853 22.871 8.777 31.565.083 8.754-8.754 8.656-22.825-.083-31.565L543.482 512l472.141-472.141c8.853-8.853 8.777-22.871.083-31.565-8.754-8.754-22.825-8.656-31.565.083L512 480.518 39.859 8.377C31.006-.476 16.988-.4 8.294 8.294c-8.754 8.754-8.656 22.825.083 31.565L480.518 512z" class="path1 fill-color3"></path>
          </symbol>
          <symbol viewBox="0 0 12 6" id="activity-more">
              <path fill-rule="evenodd" d="M4.577 5.423c.79.77 2.073.767 2.857 0l4.12-4.026C12.345.625 12.09 0 10.985 0H1.027C-.077 0-.33.63.457 1.397l4.12 4.026z"></path>
          </symbol>
          <symbol viewBox="0 0 22 22" id="rating-star">
              <path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path>
          </symbol>
      </defs>
    </svg>
    <!-- 获取用户位置时友好显示图片 -->
    <section class="section">
      <img v-for="x in 3" v-if="!goodShopsData.length" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg==" class="shellAnimation">
    </section>
    <!-- 获取到用户位置后展示推荐商家列表 -->
      <section v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="60" infinite-scroll-immediate-check="false" class="shoplist">
        <router-link :to="{path: 'shop', query:{ geohash, id: item.id }}" :key="item.id" v-for="item in goodShopsData" tag="section" class="index-container_2XMzI">
          <div class="logo-container_1XLJl_0">
            <div class="logo-main_1kulr_0">
              <img class="logo-logo_2XR1m_0" :src="getImgPath(item.image_path)">
            </div>
            <div class="logo-newShop_1NvWt_0" v-if="item.is_new"><span>新店</span></div>
          </div>
          <div class="index-main_2HHPe">
            <section class="index-line_1Zyr1">
              <h3 :class="item.is_premium ? 'index-premium_eGB7C': ''" class="index-shopname_3_J4F">{{item.name}}</h3>
              <div class="index-supportWrap_VWrQG">
                <div class="activity-activityWrap_1u6b1_0 activity-nowrap_2JDU4_0" v-for="x in item.supports"><i class="activity-container_2EaDo_0 activity-containerNoWrap_2zBBg_0" style="color: rgb(153, 153, 153); border-color: rgb(221, 221, 221);">&nbsp{{x.icon_name}}</i></div>
              </div>
            </section>
            <section class="index-line_1Zyr1">
              <div class="index-rateWrap_3sCb3">
                <rating-star :rating="item.rating"></rating-star>
                <span class="index-rate_2O_yP">{{item.rating}}</span>
                <span>月售{{item.recent_order_num}}单</span>
              </div>
              <div class="index-deliveryWrap_1Q_ky" v-if="item.delivery_mode">
                <span class="index-iconDelivery_267-X">准时达</span>
                <span class="index-iconDelivery_267-X index-hollow_lqvFq">{{item.delivery_mode.text}}</span>
              </div>
            </section>
            <section class="index-line_1Zyr1">
              <div class="index-moneylimit_1xDf3">
                <span>¥{{item.float_minimum_order_amount}}起送</span>
                <span>配送费¥{{item.float_delivery_fee}}</span>
              </div>
              <div class="index-timedistanceWrap_2RmAM">
                <span class="index-distanceWrap_HYwgP">{{item.distance > 1000 ? (item.distance/1000).toFixed(2) + 'km': item.distance + 'm'}}</span>
                <span class="index-timeWrap_1pa5y">{{item.order_lead_time}}分钟</span>
              </div>
            </section>
          </div>
        </router-link>
      </section>
      <p v-show="loading" class="index-loadmore"><span>{{loadingType}}</span></p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { shopList } from '@/pages/service/getData'
  import ratingStar from '@/components/common/ratingStar'
  import { getImgPath } from '@/components/common/mixin'

  export default{
    data () {
      return {
        location: false,
        goodShopsData: [],
        loading: false,
        busy: false,
        number: 0,
        loadingType: '正在载入更多商家...',
        keyword: ''
      }
    },
    props: ['geohash', 'restaurantCategoryIds', 'orderBy', 'supportIds', 'deliveryMode', 'sureStatus'],
    computed: {
      ...mapGetters(['doneLatitude', 'doneLongitude'])
    },
    mounted () {
      this.initData()
    },
    mixins: [ getImgPath ],
    methods: {
      initData () {
        this.keyword = decodeURI(this.$route.query.keyword)
        if (this.doneLatitude) {
          shopList(this.doneLatitude, this.doneLongitude, this.keyword, this.number).then((res) => {
            this.goodShopsData = res.data
            this.loading = true
          })
        }
      },
      listenPropChange () {
        this.number = 0
        shopList(this.doneLatitude, this.doneLongitude, this.keyword, this.number, this.restaurantCategoryIds, this.orderBy, this.supportIds, this.deliveryMode).then((res) => {
          this.goodShopsData = res.data
          this.loading = true
        })
      },
      loadMore () {
        if (this.loadingType === '没有更多了！') {
          return
        } else {
          this.busy = true
          if (this.goodShopsData.length >= 20) {
            this.number += 20
          } else {
            this.number = this.goodShopsData.length
            this.loadingType = '没有更多了！'
          }
          shopList(this.doneLatitude, this.doneLongitude, this.keyword, this.number).then((res) => {
            this.goodShopsData = this.goodShopsData.concat(res.data)
            this.loading = true
          })
          setTimeout(() => {
            this.busy = false
          }, 1000)
          this.loading = false
        }
      }
    },
    watch: {
      doneLongitude (value) {
        this.initData()
      },
      restaurantCategoryIds (value) {
        this.listenPropChange()
      },
      orderBy (value) {
        this.listenPropChange()
      },
      sureStatus (value) {
        this.listenPropChange()
      }
    },
    components: {
      ratingStar
    }
  }
</script>

<style type="text/css">
  /*--- 商铺图片列表 ---*/
  .logo-container_1XLJl_0 {
      position: relative;
      padding: .4rem .266667rem
  }

  .logo-main_1kulr_0 {
      position: relative;
      width: 1.6rem;
      height: 1.6rem
  }

  .logo-logo_2XR1m_0 {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: .053333rem
  }

  .logo-statusTip_GYWtN_0 {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;
      padding: 0 .066667rem;
      height: .373333rem;
      border-bottom-right-radius: .026667rem;
      border-bottom-left-radius: .026667rem;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      font-size: .24rem;
      line-height: .373333rem
  }

  .logo-newShop_1NvWt_0 {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 50;
      width: .853333rem;
      height: .853333rem;
      background-image: -webkit-linear-gradient(315deg, #26ce61, #26ce61 50%, transparent 0);
      background-image: linear-gradient(135deg, #26ce61, #26ce61 50%, transparent 0);
      font-size: .24rem
  }

  .logo-newShop_1NvWt_0 span {
      position: absolute;
      top: .133333rem;
      left: .026667rem;
      display: block;
      color: #fff;
      font-weight: 700;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg)
  }
  /*--- 保票准 ---*/
  .activity-container_2EaDo_0 {
      line-height: .426667rem;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      font-size: .266667rem
  }

  .activity-containerWrap_12dyC_0 .activity-activityIcon_1iJyG_0 {
      margin-top: .066667rem
  }

  .activity-containerNoWrap_2zBBg_0 .activity-description_2q8qg_0 {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis
  }

  .activity-containerNoWrap_2zBBg_0 {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center
  }

  .activity-containerNoWrap_2zBBg_0 .activity-icononly_3QM3P_0 {
      margin-left: .066667rem
  }

  .activity-description_2q8qg_0 {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      display: block;
      width: 0
  }

  .activity-activityIcon_1iJyG_0 {
      margin-right: .133333rem;
      font-size: .266667rem;
      font-style: normal;
      line-height: 1;
      height: .293333rem;
      display: inline-block;
      box-sizing: border-box;
      text-align: center;
      border: 1px solid;
      border-radius: .04rem
  }

  .activity-activityIcon_1iJyG_0.activity-icononly_3QM3P_0 {
      margin-right: 0
  }
  /*--- 商铺info ---*/
  .index-container_2XMzI {
      position: relative;
      border-bottom: 1px solid #eee;
      background-color: #fff;
      color: #666;
      list-style: none;
      font-size: .293333rem
  }

  .index-container_2XMzI,
  .index-main_2HHPe {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between
  }

  .index-main_2HHPe {
      padding: .4rem .266667rem .4rem 0;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .index-line_1Zyr1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between
  }

  .index-line_1Zyr1:nth-child(2) {
      margin-top: .2rem
  }

  .index-line_1Zyr1:nth-child(3) {
      margin-top: .226667rem;
      line-height: .32rem
  }

  .index-shopname_3_J4F {
      overflow: hidden;
      margin: 0;
      padding: 0;
      max-width: 5rem;
      color: #333;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 700;
      font-size: .4rem;
      line-height: .426667rem
  }

  .index-shopname_3_J4F.index-premium_eGB7C:before {
      margin-right: .133333rem;
      padding: 0 .066667rem;
      height: .4rem;
      border-radius: .053333rem;
      background-color: #ffd930;
      color: #52250a;
      content: "\54C1\724C";
      vertical-align: top;
      text-align: center;
      font-weight: 700;
      font-size: .293333rem;
      line-height: .4rem
  }

  .index-rateWrap_3sCb3 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center
  }

  .index-rateWrap_3sCb3>div:first-children {
      margin-top: -.08rem
  }

  .index-rate_2O_yP {
      margin: 0 .106667rem;
      color: #ff6000
  }

  .index-moneylimit_1xDf3 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center
  }

  .index-moneylimit_1xDf3 span+span:before {
      margin: 0 .08rem;
      color: #ddd;
      content: "/"
  }

  .index-moneylimit_1xDf3 span:nth-of-type(2) {
      max-width: 2.666667rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap
  }

  .index-deliveryWrap_1Q_ky {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex
  }

  .index-iconDelivery_267-X {
      padding: 0 .053333rem;
      border: 1px solid #44a5ff;
      border-radius: .053333rem;
      background-color: #fff;
      color: #2395ff;
      font-size: .266667rem;
      line-height: .346667rem
  }

  .index-iconDelivery_267-X:not(:last-child) {
      margin-right: .08rem
  }

  .index-iconDelivery_267-X.index-hollow_lqvFq {
      background-color: #2395ff;
      color: #fff
  }

  .index-activities_6HU-0 {
      position: relative;
      margin-top: .2rem;
      border-top: 1px solid #eee;
      color: #939393
  }

  .index-activities_6HU-0,
  .index-supportWrap_VWrQG {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex
  }

  .index-supportWrap_VWrQG {
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end
  }

  .index-timedistanceWrap_2RmAM {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center
  }

  .index-timedistanceWrap_2RmAM span+span:before {
      margin: 0 .08rem;
      color: #ddd;
      content: "/"
  }

  .index-distanceWrap_HYwgP {
      color: #999
  }

  .index-distanceWrap_HYwgP>span {
      display: inline-block;
      -webkit-transform: scale(.85);
      transform: scale(.85)
  }

  .index-timeWrap_1pa5y {
      color: #2395ff
  }

  .index-activityList_2Ihd7 {
      padding-top: .133333rem;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1
  }

  .index-activityList_2Ihd7 div {
      margin-top: .066667rem
  }

  .index-activityList_2Ihd7.index-needexpand_3F_4C div:first-child {
      padding-right: 1.866667rem
  }

  .index-activityBtn_3neB_ {
      position: absolute;
      right: 0;
      padding: .266667rem 0 .2rem;
      height: 100%;
      color: #999;
      text-align: right;
      line-height: 1;
      font-size: .266667rem
  }

  .index-activityBtn_3neB_ svg {
      width: .173333rem;
      height: .173333rem;
      -webkit-transition: all .3s ease-in-out;
      transition: all .3s ease-in-out;
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      fill: currentColor;
      opacity: .9;
      will-change: transform
  }

  .index-activityBtn_3neB_ svg.index-open_1WD9F {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg)
  }
</style>
