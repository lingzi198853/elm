<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
      <defs>
        <symbol viewBox="0 0 1024 1024" id="res-bad"><path fill="#D0021B" fill-rule="evenodd" d="M512 0C230.326 0 0 230.326 0 512s230.573 512 512 512 512-230.326 512-512S793.674 0 512 0zM240.694 373.755l158.735-56.285 15.306 46.164L256 419.919l-15.306-46.164zm440.409 384.123c-10.122 0-20.49-10.122-25.674-20.49-10.122-10.122-61.47-25.674-148.366-25.674-86.896 0-138.245 15.306-148.366 25.674 0 10.122-10.122 20.49-25.674 20.49s-25.674-10.122-25.674-25.674c0-71.591 174.041-71.591 194.53-71.591 20.489 0 194.53 0 194.53 71.591 10.122 10.368 0 25.674-15.306 25.674zM768 419.919l-163.672-61.47 15.306-46.164 158.735 56.285-10.368 51.348-.001.001z"></path></symbol><symbol viewBox="0 0 1146 885" id="choose"><path d="M1001.309 14.473c18.618-18.618 46.545-18.618 65.164 0l65.164 65.164c18.618 18.618 18.618 46.545 0 65.164L410.182 870.91c-18.618 18.618-46.545 18.618-65.164 0L14.545 545.092c-18.618-18.618-18.618-46.545 0-65.164l65.164-65.164c18.618-18.618 46.545-18.618 65.164 0L377.6 647.491l623.709-633.018z"></path></symbol><symbol viewBox="0 0 982 854" id="notice"><path d="M461.467 21.667c-12.8 0-29.867 4.267-51.2 25.6L214 256.334H73.2c-38.4 0-72.533 34.133-72.533 76.8v217.6c0 38.4 34.133 72.533 72.533 72.533H214l192 192c17.067 17.067 38.4 21.333 46.933 21.333 25.6 0 55.467-21.333 55.467-68.267V85.666c8.533-46.933-21.333-64-46.933-64v.001zm-29.867 691.2l-179.2-179.2H86v-192h166.4l174.933-192 4.267 563.2zM649.2.333v102.4C794.267 145.4 888.133 273.4 888.133 427S790 708.6 649.2 751.267v102.4C845.467 811 982 636.067 982 427 982 217.933 841.2 43 649.2.333z"></path><path d="M772.933 427c0-85.333-46.933-162.133-123.733-192v388.267C726 589.134 772.933 512.334 772.933 427z"></path></symbol><symbol viewBox="0 0 547 987" id="arrow-right"><path d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path></symbol><symbol viewBox="0 0 20 32" id="arrow-left"><path fill="#fff" d="M16.552 5.633l-2.044-2.044L2.243 15.854l12.265 12.557 2.044-2.044L6.331 15.854z"></path></symbol><symbol viewBox="0 0 188 163" id="res-collection"><path fill="#272636" fill-rule="evenodd" d="M94.25 26.5C85.75 10.75 69.125 0 50.125 0 22.625 0 .375 22.375.375 50c0 13.125 5 25 13.25 34L90 160.75c1.25 1.125 2.75 1.75 4.25 1.75s3-.625 4.25-1.75L174.875 84C183 75.125 188 63.125 188 50c0-27.625-22.25-50-49.75-50-18.875 0-35.375 10.75-44 26.5zm71.125 49.375l-71.125 72.25-71.125-72.25C16.75 69.125 12.875 60 12.875 50c0-20.75 16.75-37.5 37.25-37.5 16.625 0 31 11 36 26.125 1.25 3.25 4.5 5.625 8.125 5.625 3.75 0 6.875-2.25 8.25-5.5 4.875-15.25 19.125-26.25 35.75-26.25 20.625 0 37.25 16.75 37.25 37.5.125 10-3.75 19.125-10.125 25.875z"></path></symbol><symbol viewBox="0 0 1024 1024" id="res-well"><path fill="#7ED321" fill-rule="evenodd" d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0zM247.808 402.432c0-36.864 39.936-93.184 93.184-93.184s93.184 56.32 93.184 93.184c0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48 0-16.384-24.576-52.224-52.224-52.224-27.648 0-52.224 35.84-52.224 52.224 0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48zM512 800.768c-132.096 0-239.616-96.256-239.616-215.04 0-11.264 9.216-20.48 20.48-20.48 11.264 0 20.48 9.216 20.48 20.48 0 96.256 89.088 174.08 198.656 174.08 109.568 0 198.656-77.824 198.656-174.08 0-11.264 9.216-20.48 20.48-20.48 11.264 0 20.48 9.216 20.48 20.48 0 117.76-107.52 215.04-239.616 215.04zm243.712-377.856c-11.264 0-20.48-9.216-20.48-20.48 0-17.408-24.576-52.224-52.224-52.224-28.672 0-52.224 34.816-52.224 52.224 0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48 0-36.864 39.936-93.184 93.184-93.184s93.184 56.32 93.184 93.184c0 11.264-9.216 20.48-20.48 20.48z"></path></symbol><symbol viewBox="0 0 1024 1024" id="res-ordinary"><path fill="#febb00" fill-rule="evenodd" d="M670.476 454.548c33.663 0 60.952-27.019 60.952-60.349s-27.289-60.349-60.952-60.349-60.952 27.019-60.952 60.349 27.289 60.349 60.952 60.349zm-316.952 0c33.663 0 60.952-27.019 60.952-60.349s-27.289-60.349-60.952-60.349-60.952 27.019-60.952 60.349 27.289 60.349 60.952 60.349zM0 508.862C0 228.892 226.941 1.931 506.938 1.931h10.125c279.974 0 506.938 226.899 506.938 506.931 0 279.97-226.941 506.931-506.938 506.931h-10.125C226.964 1015.793 0 788.894 0 508.862zm292.571 187.081c0 13.425 10.844 24.14 24.22 24.14h390.417c13.372 0 24.22-10.808 24.22-24.14 0-13.425-10.844-24.14-24.22-24.14H316.791c-13.372 0-24.22 10.808-24.22 24.14z" class="path1 fill-color2"></path></symbol><symbol viewBox="0 0 1024 1024" id="res-x"><path fill-rule="evenodd" d="M480.518 512L8.377 984.141c-8.853 8.853-8.777 22.871-.083 31.565 8.754 8.754 22.825 8.656 31.565-.083L512 543.482l472.141 472.141c8.853 8.853 22.871 8.777 31.565.083 8.754-8.754 8.656-22.825-.083-31.565L543.482 512l472.141-472.141c8.853-8.853 8.777-22.871.083-31.565-8.754-8.754-22.825-8.656-31.565.083L512 480.518 39.859 8.377C31.006-.476 16.988-.4 8.294 8.294c-8.754 8.754-8.656 22.825.083 31.565L480.518 512z" class="path1 fill-color3"></path></symbol><symbol viewBox="0 0 12 6" id="activity-more"><path fill-rule="evenodd" d="M4.577 5.423c.79.77 2.073.767 2.857 0l4.12-4.026C12.345.625 12.09 0 10.985 0H1.027C-.077 0-.33.63.457 1.397l4.12 4.026z"></path></symbol><symbol viewBox="0 0 22 22" id="rating-star"><path fill-rule="evenodd" d="M10.986 17.325l-5.438 3.323c-1.175.718-1.868.208-1.55-1.126l1.48-6.202-4.84-4.15c-1.046-.895-.775-1.71.59-1.82l6.353-.51L10.03.95c.53-1.272 1.39-1.266 1.915 0l2.445 5.89 6.353.51c1.372.11 1.632.93.592 1.82l-4.84 4.15 1.478 6.202c.32 1.34-.38 1.84-1.55 1.126l-5.437-3.323z"></path></symbol>
      </defs>
    </svg>
    <div class="shop-header-container_qVoLT_0">
      <div class="shop-header-background_2cwiR_0" :style="'background-image: url(' + getImgPath(shopDetail.image_path) + 'thumbnail/!40p/blur/50x40/)'"></div>
      <nav class="shop-header-navBar_ibFIP_0">
        <a href="javascript:;" @click="$router.go(-1)">
          <svg>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
          </svg>
        </a>
      </nav>
      <div class="shop-header-main_1B2kH_0">
        <img class="shop-header-logo_3woDQ_0" :src="getImgPath(shopDetail.image_path)">
        <div class="shop-header-content_3UjPs_0">
          <h2 class="shop-header-shopName_2QrHh_0">{{shopDetail.name}}</h2>
          <p class="shop-header-delivery_1mcTe_0">
            <span class="shop-header-deliveryItem_Fari3_0" v-if="shopDetail.delivery_mode">{{shopDetail.delivery_mode.text}}</span>
            <span class="shop-header-deliveryItem_Fari3_0" v-else>商家配送</span>
            <span class="shop-header-deliveryItem_Fari3_0">{{shopDetail.order_lead_time}}分钟送达</span>
            <span class="shop-header-deliveryItem_Fari3_0">{{deliveryFee}}</span>
          </p>
          <div class="shop-header-notice_2DzmG_0">
            <span>公告：</span>
            <span v-if="shopDetail.promotion_info !== ''">{{shopDetail.promotion_info}}</span>
            <span v-else>本餐厅不使用饿了么配送，由必胜宅急送官方品牌配送，会员用户无法享受免配送费服务</span>
          </div>
        </div>
        <svg class="shop-header-detailIcon_1IXZI_0" @click="toggleShopDetail()">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
        </svg>
      </div>
      <div class="shop-header-activities_3NWG9_0" v-if="activities.length !== 0">
        <div class="activity-container_2EaDo_0 activity-containerNoWrap_2zBBg_0 shop-header-activityRow_fbfAg_0"> <i class="activity-activityIcon_1iJyG_0" :style="'color: rgb(255, 255, 255); border-color: #' + activities[0].icon_color+ '; background-color: #' + activities[0].icon_color">{{activities[0].icon_name}}</i>
          <span class="activity-description_2q8qg_0">
            <span>{{activities[0].description}}</span>
          </span>
        </div>
        <div class="shop-header-activityCount_tCsbf_0" @click="toggleActivities()">{{activities.length}}个活动</div>
      </div>
    </div>
    <!-- activities -->
    <transition name="fade">
      <div v-if="activitiesShow" data-v-1c846764="" class="modal-container_1qSDG_0">
          <div data-v-1c846764="" class="modal-content_30zum_0">
              <div class="bulletin-modal-container_3dL1X_0">
                <h2>{{shopDetail.name}}</h2>
                <h2>
                <div class="bulletin-modal-rating_mAg8E_0">
                <div class="rating-wrapper_36aX1_0">
                <div class="rating-max_1MKzt_0">
                  <ratingStar></ratingStar>
                </div>
                </div>
                </div>
                </h2>
                <h3 class="bulletin-modal-subtitle_17A0B_0"><span>优惠信息</span></h3>
                <ul>
                    <li v-for="item in activities">
                        <div class="activity-container_2EaDo_0 activity-containerNoWrap_2zBBg_0 shop-header-activityRow_fbfAg_0"> <i class="activity-activityIcon_1iJyG_0" :style="'color: rgb(255, 255, 255); border-color: #' + item.icon_color+ '; background-color: #' + item.icon_color">{{item.icon_name}}</i>
                          <span class="activity-description_2q8qg_0">
                            <span>{{item.description}}</span>
                          </span>
                        </div>
                    </li>
                </ul>
                  <h3 class="bulletin-modal-subtitle_17A0B_0"><span>商家公告</span></h3>
                  <div v-if="shopDetail.promotion_info !== ''">{{shopDetail.promotion_info}}</div>
                  <div v-else>本餐厅不使用饿了么配送，由必胜宅急送官方品牌配送，会员用户无法享受免配送费服务</div>
              </div>
              <div class="bulletin-modal-close_u5_7x_0" @click="toggleActivities()">
                  <svg>
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#res-x"></use>
                  </svg>
              </div>
          </div>
      </div>
      </transition>
    <transition name="fade">
      <div v-if="shopDetailShow" data-v-1c846764="" class="modal-container_1qSDG_0">
        <header data-v-1c846764="" class="modal-header_359kZ_0">
          <svg data-v-1c846764="" class="modal-backIcon_3ILnQ_0" @click="toggleShopDetail()">
            <use data-v-1c846764="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
          </svg>
          <h1 data-v-1c846764="" class="modal-title_2DL0f_0">商家详情</h1>
        </header>
        <div data-v-1c846764="" class="modal-content_30zum_0">
          <div data-v-c90d572c="" class="shop-info">
            <section class="section" data-v-c90d572c="">
              <h3 class="section-title">活动与属性</h3>
              <div>
                <div class="activity-container_2EaDo_0 activity-containerWrap_12dyC_0 activity-activity_1MzqP_0"> <i class="activity-activityIcon_1iJyG_0" style="color: rgb(255, 255, 255); border-color: rgb(112, 188, 70); background-color: rgb(112, 188, 70);">新</i>
                  <span class="activity-description_2q8qg_0">
                    <span>新用户下单立减17.0元(不与其它活动同享)</span>
                  </span>
                </div>
              </div>
            </section>     
            <section class="section" data-v-c90d572c="">
              <h3 class="section-title">商家信息</h3>
              <ul class="detail-list_3cxMx_0">
                <li>
                  风靡京沪的湘菜品牌望湘园旗下外送——湘当快，在家就能吃到望湘园鱼头王、湘西霸王蛙等经典湘味，金字招牌，品质有保证，辣得舒服，就这湘味！电话：4000279797
                </li>   
                <li>地址：上海市黄浦区西藏中路180号六楼</li>
                <li>营业时间：["10:30-22:00"]</li>
                <li>营业执照
                  <svg class="arrow-right">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                  </svg>
                </li>
                <li>
                  餐饮服务许可证
                  <svg class="arrow-right">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                  </svg>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </transition>
    <div class="shop-tab-container_3skq8_0">
      <div class="shop-tab-tab_r4SDi_0" :class="{active: index == 0}" @click="tabToggle(0, goods)">
        <span class="shop-tab-title_1crD1_0">商品</span>
      </div>
      <div class="shop-tab-tab_r4SDi_0" :class="{active: index == 1}" @click="tabToggle(1, ratings)">
        <span class="shop-tab-title_1crD1_0">评价</span>
      </div>
    </div>
    <component :is='currentView' :seller="shopDetail"></component>
  </div>
</template>
<script>
  import goods from '@/pages/sell/shop/goods'
  import ratings from '@/pages/sell/shop/ratings'
  import ngeohash from 'ngeohash'
  import { getShopDetailData } from '@/pages/service/getData'
  import { getImgPath } from '@/components/common/mixin'
  import ratingStar from '@/components/common/ratingStar'

  export default {
    data () {
      return {
        shopDetail: {},
        deliveryFee: '',
        activities: [],
        activitiesShow: false,
        shopDetailShow: false,
        goods: goods,
        ratings: ratings,
        index: 0,
        currentView: 'goods'
      }
    },
    mounted () {
      this.initData()
    },
    mixins: [ getImgPath ],
    methods: {
      tabToggle (index, tab) {
        this.index = index
        this.currentView = tab
      },
      async initData () {
        this.geohash = this.$route.query.geohash
        this.id = this.$route.query.id
        let geo = ngeohash.decode(this.geohash)
        this.latitude = geo.latitude
        this.longitude = geo.longitude
        this.shopDetail = await getShopDetailData(this.id, this.latitude, this.longitude)
        this.deliveryFee = this.shopDetail.piecewise_agent_fee.tips
        this.activities = this.shopDetail.activities
      },
      toggleActivities () {
        this.activitiesShow = !this.activitiesShow
      },
      toggleShopDetail () {
        this.shopDetailShow = !this.shopDetailShow
      }
    },
    components: {
      goods,
      ratings,
      ratingStar
    }
  }
</script>
<style type="text/css">
  .shop-header-container_qVoLT_0 {
      position: relative;
      padding-bottom: .8rem;
      color: #fff;
      font-size: .293333rem
  }

  .shop-header-background_2cwiR_0 {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #3190e8;
      background-size: cover;
      background-repeat: no-repeat
  }

  .shop-header-background_2cwiR_0:before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(119, 103, 137, .43)
  }

  .shop-header-navBar_ibFIP_0 {
      position: relative;
      padding: .106667rem .266667rem
  }

  .shop-header-navBar_ibFIP_0 svg {
      width: .666667rem;
      height: .666667rem
  }

  .shop-header-main_1B2kH_0 {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex
  }

  .shop-header-logo_3woDQ_0 {
      width: 1.733333rem;
      height: 1.733333rem;
      border: 1px solid #fff;
      border-radius: .106667rem;
      margin: 0 .266667rem
  }

  .shop-header-content_3UjPs_0 {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      display: block;
      width: 0;
      padding-right: .133333rem
  }

  .shop-header-shopName_2QrHh_0 {
      margin: 0;
      font-size: .466667rem;
      line-height: .466667rem;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis
  }

  .shop-header-activities_3NWG9_0 {
      position: absolute;
      left: .266667rem;
      right: .346667rem;
      bottom: .133333rem
  }

  .shop-header-activityRow_fbfAg_0 {
      padding-right: 1.28rem
  }

  .shop-header-activityCount_tCsbf_0 {
      position: absolute;
      top: 0;
      right: 0
  }

  .shop-header-activityCount_tCsbf_0 .shop-header-arrow_1uhJg_0 {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      right: -.266667rem;
      height: .266667rem;
      width: .266667rem;
      fill: #fff
  }

  .shop-header-delivery_1mcTe_0 {
      white-space: nowrap;
      height: .666667rem;
      line-height: .72rem
  }

  .shop-header-deliveryItem_Fari3_0 {
      line-height: .32rem
  }

  .shop-header-deliveryItem_Fari3_0:not(:last-child):after {
      content: " / ";
      opacity: .5
  }

  .shop-header-notice_2DzmG_0 {
      height: .533333rem;
      line-height: .533333rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis
  }

  .shop-header-detailIcon_1IXZI_0 {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      right: .133333rem;
      height: .333333rem;
      width: .666667rem;
      fill: #fff
  }
  .modal-container_1qSDG_0 {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      overflow: auto;
      z-index: 100;
      background-color: #fff
  }

  .modal-header_359kZ_0 {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      text-align: center;
      background-color: #2196f3;
      color: #fff;
      height: 1.173333rem;
      line-height: 1.173333rem;
      z-index: 999
  }

  .modal-title_2DL0f_0 {
      font-size: .533333rem
  }

  .modal-content_30zum_0 {
      padding-top: 1.173333rem;
      height: 100%;
      box-sizing: border-box;
      overflow: auto;
      -webkit-overflow-scrolling: touch
  }

  .modal-backIcon_3ILnQ_0 {
      position: absolute;
      width: .8rem;
      height: .533333rem;
      left: .106667rem;
      top: .32rem;
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
      fill: #fff
  }
  .rating-wrapper_36aX1_0 {
      position: relative;
      overflow: hidden;
      display: inline-block;
      vertical-align: middle
  }

  .rating-max_1MKzt_0,
  .rating-rating_1ZAfX_0 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex
  }

  .rating-max_1MKzt_0 svg,
  .rating-rating_1ZAfX_0 svg {
      display: block;
      margin: 0 1px;
      -webkit-box-flex: 0;
      -webkit-flex: none;
      -ms-flex: none;
      flex: none;
      width: .266667rem;
      height: .266667rem
  }

  .rating-max_1MKzt_0 svg {
      fill: #ddd
  }

  .rating-rating_1ZAfX_0 {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden
  }

  .rating-rating_1ZAfX_0 svg {
      fill: #ffaa0c
  }
  .bulletin-modal-container_3dL1X_0 {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: .8rem solid transparent;
      border-top-width: 1.066667rem;
      border-bottom-width: 2.4rem;
      overflow: auto;
      background-color: #262626;
      color: #fff;
      -webkit-backdrop-filter: saturate(500%) blur(.666667rem);
      backdrop-filter: saturate(500%) blur(.666667rem)
  }

  .bulletin-modal-container_3dL1X_0 h2 {
      text-align: center;
      font-size: 1.5em
  }

  .bulletin-modal-subtitle_17A0B_0 {
      text-align: center;
      margin: .8rem 0 .533333rem;
      background-image: -webkit-linear-gradient(left, #555);
      background-image: linear-gradient(90deg, #555);
      background-position: 50%;
      background-size: 100% 1px;
      background-repeat: no-repeat
  }

  .bulletin-modal-subtitle_17A0B_0 span {
      font-size: .32rem;
      padding: .133333rem .266667rem;
      border-radius: .666667rem;
      border: 1px solid #555;
      background-color: #262626
  }

  .bulletin-modal-rating_mAg8E_0 {
      display: inline-block;
      -webkit-transform: scale(2);
      transform: scale(2)
  }

  .bulletin-modal-close_u5_7x_0 {
      position: fixed;
      left: 0;
      right: 0;
      bottom: .666667rem;
      margin: auto;
      width: 1.2rem;
      height: 1.2rem;
      border: 1px solid #888;
      border-radius: 50%
  }

  .bulletin-modal-close_u5_7x_0 svg {
      fill: #fff;
      width: 100%;
      height: 100%;
      -webkit-transform: scale(.3);
      transform: scale(.3)
  }
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
      height: .333333rem;
      display: inline-block;
      box-sizing: border-box;
      text-align: center;
      border: 1px solid;
      border-radius: .04rem
  }
  .activity-activityIcon_1iJyG_0.activity-icononly_3QM3P_0 {
      margin-right: 0
  }
  /* animation */
  .slide-right-enter-active[data-v-1c846764],
  .slide-right-leave-active[data-v-1c846764] {
      -webkit-transition: -webkit-transform .3s ease-out .1s;
      transition: -webkit-transform .3s ease-out .1s;
      transition: transform .3s ease-out .1s;
      transition: transform .3s ease-out .1s, -webkit-transform .3s ease-out .1s
  }

  .slide-right-enter[data-v-1c846764],
  .slide-right-leave-to[data-v-1c846764] {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0)
  }

  .fade-enter-active[data-v-1c846764],
  .fade-leave-active[data-v-1c846764] {
      -webkit-transition: opacity .3s ease-out .1s;
      transition: opacity .3s ease-out .1s
  }

  .fade-enter[data-v-1c846764],
  .fade-leave-to[data-v-1c846764] {
      opacity: 0
  }
  .shop-tab-container_3skq8_0 {
      line-height: 1.2rem;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      background-color: #fff
  }

  .shop-tab-tab_r4SDi_0 {
      position: relative;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      display: block;
      width: 0;
      text-align: center;
      font-size: .373333rem;
      color: #666;
      border-bottom: 1px solid #ddd
  }

  .active {
      color: #3190e8
  }

  .active .shop-tab-title_1crD1_0 {
      position: relative
  }

  .active .shop-tab-title_1crD1_0:after {
      content: "";
      position: absolute;
      bottom: -.16rem;
      left: -.066667rem;
      right: -.066667rem;
      height: .053333rem;
      background-color: #3190e8;
      border-radius: .04rem
  }
</style>

