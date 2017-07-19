<template>
  <div>
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
  </div>
</template>
<script>
  import ngeohash from 'ngeohash'
  import { getShopDetailData } from '@/pages/service/getData'
  import { getImgPath } from '@/components/common/mixin'
  import ratingStar from '@/components/common/ratingStar'

  export default {
    data () {
      return {
        shopDetail: '',
        deliveryFee: '',
        activities: [],
        activitiesShow: false,
        shopDetailShow: false
      }
    },
    mounted () {
      this.initData()
    },
    mixins: [ getImgPath ],
    methods: {
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
</style>
