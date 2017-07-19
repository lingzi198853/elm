<template>
  <div geohash="ws132108y23c">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
      <defs>
        <symbol viewBox="0 0 512 512" id="bin">
          <path d="M64 160v320c0 17.6 14.4 32 32 32h288c17.6 0 32-14.4 32-32V160H64zm96 288h-32V224h32v224zm64 0h-32V224h32v224zm64 0h-32V224h32v224zm64 0h-32V224h32v224zM424 64H320V24c0-13.2-10.8-24-24-24H184c-13.2 0-24 10.8-24 24v40H56c-13.2 0-24 10.8-24 24v40h416V88c0-13.2-10.8-24-24-24zm-136 0h-96V32.401h96V64z"></path>
        </symbol>
        <symbol viewBox="0 0 20 32" id="arrow">
          <path fill="#fff" d="M16.552 5.633l-2.044-2.044L2.243 15.854l12.265 12.557 2.044-2.044L6.331 15.854z"></path>
        </symbol>
        <symbol viewBox="0 0 32 32" id="arrow-right">
          <path fill="#999" d="M26.055 16L10.118 32 6.45 28.142l12.205-12.269L5.944 3.92 9.865-.001z"></path>
        </symbol>
        <symbol viewBox="0 0 33 32" id="default">
          <path fill="#3b87c8" d="M13.374 29.064a.94.94 0 0 1-.941-.941V6.476l-7.285 6.899a.942.942 0 0 1-1.299-1.364l8.876-8.424a.94.94 0 0 1 1.59.681v23.855a.94.94 0 0 1-.941.941zM20.904 29.355h-.008a.94.94 0 0 1-.375-.078.943.943 0 0 1-.559-.86V3.944a.94.94 0 1 1 1.882 0v22.287l7.238-6.842a.94.94 0 0 1 1.289 1.366l-8.818 8.338a.943.943 0 0 1-.649.264z"></path>
        </symbol>
        <symbol viewBox="0 0 32 32" id="distance">
          <path fill="#2a9bd3" d="M15.884 31.236l-.042.001a.888.888 0 0 1-.59-.224l-7.91-7.91a7.548 7.548 0 0 1-.498-.471 12.752 12.752 0 0 1-3.747-9.045C3.097 6.523 8.824.796 15.888.796s12.791 5.727 12.791 12.791c0 3.532-1.432 6.73-3.747 9.045-.196.196-.409.391-.613.578l-7.813 7.804a.886.886 0 0 1-.589.223l-.035-.001zm0-28.667C9.818 2.59 4.908 7.513 4.908 13.582c0 3.023 1.218 5.762 3.19 7.752l.461.435 7.316 7.316 7.2-7.2q.284-.249.551-.516a10.977 10.977 0 0 0 3.225-7.787c0-6.066-4.905-10.987-10.965-11.013z"></path>
          <path fill="#2a9bd3" d="M15.884 18.524a5.707 5.707 0 0 1-4.07-1.732l-.001-.001a5.76 5.76 0 1 1 4.119 1.734h-.05zm-2.817-2.942a3.982 3.982 0 1 0 0-5.626c-.726.717-1.175 1.713-1.175 2.813s.449 2.096 1.175 2.813z"></path>
        </symbol>
        <symbol viewBox="0 0 32 32" id="fengniao">
          <path fill="#27a9e1" d="M5.953 2.793s-.117 1.801.857 3.56c.361.255 10.458 6.218 10.458 6.218L5.953 2.794z"></path>
          <path fill="#b8e5fa" d="M9.604.889s-.333 1.404.069 3.147c.254.307 7.801 8.116 7.801 8.116L9.604.889z"></path>
          <path fill="#0089cf" d="M29.282 14.601l-4.861-.361s-.133-.001-.147-.226h-.002a2.652 2.652 0 0 0-2.978-2.357h-.003l-.011.001-.12.019-.004.001c-.432.075-1.812.374-3.038 1.285 0 0-.167.121-.421.33L2.665 6.043s3.254 8.665 12.207 11.98c-1.6 2.849-7.407 13.48-7.407 13.48l2.446-1.306s.775-2.853 1.884-4.957c.609-.936 1.211-.992 1.498-1.141.291-.151 3.707-.765 6.431-4.339.897-1.166 1.244-2.666 1.723-4.261.28-.061 3.008-.651 3.789-.718 1.068-.092 4.045-.181 4.045-.181z"></path>
          <path fill="#0089cf" d="M7.392 17.849c-1.567-1.368-2.199-3.219-2.035-5.217-.232-.288-.45-.572-.654-.851-.484 2.903.555 4.854 2.176 6.269 1.538 1.342 3.635 1.85 5.466 1.577-1.674.109-3.563-.565-4.953-1.778z"></path>
          <path fill="#0089cf" d="M12.345 19.628h.002zm-7.642-7.846c.204.279.421.563.654.851-.164 1.998.468 3.849 2.035 5.217 1.292 1.128 3.016 1.79 4.597 1.79.12 0 .238-.004.356-.011a6.554 6.554 0 0 1-.975.071c-1.568 0-3.22-.54-4.49-1.648-1.621-1.415-2.66-3.366-2.176-6.269z"></path>
        </symbol>
        <symbol viewBox="0 0 23 32" id="hot">
          <path fill="#f07373" d="M9.859 29.375c-3.489-.771-6.362-3.097-7.187-5.551-.882-2.623-1.029-6.873-.238-9.318l-1.727.037.001.002.001.004.004.01.011.029.038.091c.039.09.086.191.142.3.155.304.349.627.586.955a7.477 7.477 0 0 0 2.711 2.318c.583.153.583.153 1.087-.188.187-.263.187-.263.224-.39.028-.094.041-.176.05-.28.01-.109.016-.238.022-.47.063-2.219.162-3.38.562-4.943a10.05 10.05 0 0 1 .814-2.185c1.433-2.723 4.843-6.053 6.699-7.021l-1.325-.962c-.064.382-.127.992-.131 1.722-.008 1.252.169 2.393.616 3.329.261.547.525.968 1.132 1.862l.23.339c.86 1.281 1.161 1.986 1.069 2.653l-.009.125c.069.517.069.517.781.906.451-.026.451-.026.578-.104.144-.093.144-.093.19-.136.041-.037.079-.077.123-.125.068-.076.153-.178.245-.295.22-.279.458-.615.677-.963.648-1.028 1.045-1.988 1.037-2.845l-.914.009-.706.581c.295.358.809 1.075 1.33 1.936.826 1.363 1.492 2.791 1.898 4.209 1.1 3.845.3 9.288-2.245 11.75a9.652 9.652 0 0 1-1.659 1.29 10.232 10.232 0 0 1-3.471 1.332c-.794.151-1.385.191-2.064.191h-.009a2.75 2.75 0 0 1-.373-.03 6.007 6.007 0 0 1-.585-.115 7.765 7.765 0 0 1-.536-.15l-.578 1.735a9.182 9.182 0 0 0 1.445.341c.221.031.43.048.627.048h.009a12.546 12.546 0 0 0 2.407-.224 12.011 12.011 0 0 0 4.088-1.572c.699-.431 1.358-.94 1.971-1.533 3.098-2.998 4-9.132 2.731-13.567-.455-1.591-1.188-3.161-2.092-4.653-.569-.939-1.134-1.727-1.482-2.15l-1.645-1.998.024 2.588c.004.412-.281 1.1-.756 1.853a9.64 9.64 0 0 1-.569.809 4.528 4.528 0 0 1-.158.195c.028-.027.028-.027.16-.113.122-.075.122-.075.57-.101.71.388.71.388.778.902h-.914l.906.125c.174-1.262-.261-2.281-1.362-3.922l-.235-.347c-.554-.817-.787-1.189-.995-1.624-.306-.642-.444-1.53-.438-2.53a10.566 10.566 0 0 1 .107-1.431L14.44.304l-1.628.85c-2.18 1.138-5.862 4.733-7.471 7.791a11.873 11.873 0 0 0-.967 2.583 19.2 19.2 0 0 0-.511 3.147c-.036.423-.061.839-.079 1.273-.011.281-.019.531-.029.924-.005.191-.01.298-.015.354a.403.403 0 0 1 .019-.077c.027-.099.027-.099.203-.346.492-.332.492-.332 1.112-.157a5.745 5.745 0 0 1-2.54-2.496 3.456 3.456 0 0 1-.093-.197l-.018-.044-.002-.006v.001l.001.002v.002l-.915-2.473-.812 2.51c-.917 2.836-.757 7.485.245 10.463 1.042 3.099 4.442 5.852 8.526 6.754l.395-1.785z"></path>
        </symbol>
        <symbol viewBox="0 0 32 32" id="price">
          <path fill="#e6b61a" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path>
          <path fill="#e6b61a" d="M23.14 6.06l-5.12 8.65h4.48v1.54h-5.49v2.43h5.49v1.54h-5.49v5.1h-2.02v-5.1H9.53v-1.54h5.46v-2.43H9.53v-1.54h4.45L8.8 6.06h2.24l4.99 8.48 4.93-8.48h2.18z"></path>
        </symbol>
        <symbol viewBox="0 0 33 32" id="rating">
          <path fill="#eba53b" d="M27.087 31.84L16.8 25.553 6.504 31.84l2.824-11.727-9.186-7.878 12.019-.941L16.801.16l4.631 11.134 12.019.941-9.158 7.849zM16.8 23.369l7.407 4.527-2.014-8.471 6.588-5.647-8.659-.696L16.8 5.063l-3.341 8.019-8.659.696 6.588 5.647-2.014 8.471z"></path>
        </symbol>
        <symbol viewBox="0 0 38 32" id="selected">
          <path fill="#3190e8" d="M32.291 2.327c.582-.582 1.455-.582 2.036 0l2.036 2.036c.582.582.582 1.455 0 2.036L13.818 29.09c-.582.582-1.455.582-2.036 0L1.455 18.908c-.582-.582-.582-1.455 0-2.036l2.036-2.036c.582-.582 1.455-.582 2.036 0l7.273 7.273L32.291 2.327z"></path>
        </symbol>
        <symbol viewBox="0 0 32 32" id="speed">
          <path fill="#37c7b7" d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16zm0-2C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"></path>
          <path fill="#37c7b7" d="M15 7v11.002l5.678 4.882 1.304-1.517-5.33-4.583.348.758V6.999h-2z"></path>
        </symbol>
      </defs>
    </svg>
      <header class="ElemeHeader-wrapper_3axzyZv" data-v-3d8ac645="">
        <div class="ElemeHeader-wrapper_3axzyZv" style="background: rgb(0, 151, 255);">
          <div class="ElemeHeader-left_2Jd8GcR">
            <svg @click="$router.go(-1)">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
            </svg>
          </div>
          <h1 class="ElemeHeader-center__Vl_mYE">{{categoryTitle}}</h1>
        </div>
      </header>
        <aside data-v-17903090="" class="filter">
          <div data-v-17903090="" class="filter-header">
            <a data-v-17903090="" href="javascript:" class="filter-nav" :class="{active:sortBy == 'food'}" @click="chooseType('food')">
              <span data-v-17903090="">{{categoryTitle}}</span>
              <svg data-v-17903090="" viewBox="0 0 72 32">
                <path data-v-17903090="" d="M36 32l36-32h-72z"></path>
              </svg>
            </a>
            <a data-v-17903090="" href="javascript:" class="filter-nav" :class="{active:sortBy == 'sort'}" @click="chooseType('sort')">
              <span data-v-17903090="">{{sortTitle}}</span>
              <svg data-v-17903090="" viewBox="0 0 72 32">
                <path data-v-17903090="" d="M36 32l36-32h-72z"></path>
              </svg>
            </a>
            <a data-v-17903090="" href="javascript:" class="filter-nav filter-nav-more" :class="{active:sortBy == 'activity' || filterNum !== 0}" @click="chooseType('activity')">
              <span data-v-17903090="">筛选</span>
              <svg data-v-17903090="" viewBox="0 0 72 32">
                <path data-v-17903090="" d="M36 32l36-32h-72z"></path>
              </svg>
            </a>
          </div>
          <transition name="filter-modal">
            <section class="filter-extend filter-category" :class="{open:sortBy == 'food'}" data-v-98a11d7e="">
                <div class="filter-scroller">
                    <ul>
                        <li :class="{active:restaurant_category_id == item.id}" v-for="(item, index) in category" :key="index" @click="selectCategory(item.id, index)">
                          <img v-if="index !== 0" :src="getImgPath(item.image_url)" class="icon">
                          <span>{{item.name}}</span><span class="count">{{item.count}}</span>
                          <svg class="arrow" v-if="index !== 0">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                          </svg>
                        </li>
                    </ul>
                    <ul>
                      <li :class="{active:restaurant_category_ids == item.id}" v-for="(item, index) in subCategories" :key="index" @click="getCategoryId(item.id, index)"><span>{{item.name}}</span><span class="count">{{item.count}}</span></li>
                    </ul>
                </div>
            </section>
          </transition>
          <transition name="filter-modal">
            <section data-v-64532906="" class="filter-extend filter-sort" :class="{open:sortBy == 'sort'}" morefilter="" data-v-17903090="">
              <ul data-v-64532906="" @click="getSort($event)">
                <li data-v-64532906="" data="0" data-name="智能排序" :class="{active:order_by == 0}">
                  <svg data-v-64532906="">
                    <use data-v-64532906="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#default"></use>
                  </svg>
                  <span data-v-64532906="">智能排序</span>
                  <svg data-v-64532906="" class="selected">
                    <use data-v-64532906="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                </li>
                <li data-v-64532906="" data="5" data-name="距离最近" :class="{active:order_by == 5}">
                  <svg data-v-64532906="">
                    <use data-v-64532906="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#distance"></use>
                  </svg>
                  <span data-v-64532906="">距离最近</span>
                  <svg data-v-64532906="" class="selected">
                    <use data-v-64532906="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                </li>
                <li data-v-64532906="" data="6" data-name="销量最高" :class="{active:order_by == 6}">
                  <svg data-v-64532906="">
                    <use data-v-64532906="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#hot"></use>
                  </svg>
                  <span data-v-64532906="">销量最高</span>
                  <svg data-v-64532906="" class="selected">
                    <use data-v-64532906="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                </li>
                <li data-v-64532906="" data="1" data-name="起送价最低" :class="{active:order_by == 1}">
                  <svg data-v-64532906="">
                    <use data-v-64532906="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#price"></use>
                  </svg>
                  <span data-v-64532906="">起送价最低</span>
                  <svg data-v-64532906="" class="selected">
                    <use data-v-64532906="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                </li>
                <li data-v-64532906="" data="2" data-name="配送速度最快" :class="{active:order_by == 2}">
                  <svg data-v-64532906="">
                    <use data-v-64532906="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#speed"></use>
                  </svg>
                  <span data-v-64532906="">配送速度最快</span>
                  <svg data-v-64532906="" class="selected">
                    <use data-v-64532906="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                </li>
                <li data-v-64532906="" data="3" data-name="评分最高" :class="{active:order_by == 3}">
                  <svg data-v-64532906="">
                    <use data-v-64532906="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating"></use>
                  </svg>
                  <span data-v-64532906="">评分最高</span>
                  <svg data-v-64532906="" class="selected">
                    <use data-v-64532906="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                  </svg>
                </li>
              </ul>
            </section>
          </transition>
          <transition name="filter-modal">
            <section data-v-a466efa8="" class="filter-extend filter-more" :class="{open:sortBy == 'activity'}" data-v-17903090="">
              <!-- <aside v-if="loaded==false" data-v-a466efa8="" class="loading">????..</aside> -->
              <div data-v-d7cbbe24="" class="filter-scroller">
                <dl data-v-d7cbbe24="">
                  <dt data-v-d7cbbe24="">配送方式</dt>
                  <dd data-v-d7cbbe24="" :class="{selected:delivery_mode == item.id}" @click="getDelivery(item.id)" v-for="item in activityDelivery">
                    <svg data-v-d7cbbe24="" class="fengniao">
                        <use data-v-d7cbbe24="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fengniao"></use>
                    </svg>
                    <svg data-v-d7cbbe24="" class="selected-icon">
                        <use data-v-d7cbbe24="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                    </svg>
                    <span data-v-d7cbbe24="">{{item.text}}</span>
                  </dd>
                </dl>
                <dl data-v-d7cbbe24="">
                    <dt data-v-d7cbbe24="">商家属性 (可多选)</dt>
                    <dd data-v-d7cbbe24="" :class="{selected:support_ids[index].status}" :key="item.id" v-for="(item, index) in activitySupport" @click="selectSupportIds(item.id, index)">
                      <svg data-v-d7cbbe24="" class="selected-icon">
                          <use data-v-d7cbbe24="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selected"></use>
                      </svg>
                      <i data-v-d7cbbe24="" :style="{color: '#'+item.icon_color}">
                        {{item.icon_name}}
                      </i>
                      <span data-v-d7cbbe24="">{{item.name}}</span>
                    </dd>
                </dl>
              </div>
              <div data-v-a466efa8="" class="filter-btn">
                <a data-v-a466efa8="" href="javascript:" @click="clear()">清空</a>
                <a data-v-a466efa8="" href="javascript:" @click="sure()">确定<span data-v-d7cbbe24="" v-if="filterNum !== 0">({{filterNum}})</span></a>
              </div>
            </section>
          </transition>
          <section data-v-17903090="" class="filter-modal" :class="{open:sortBy}"></section>
        </aside>
      <ul infinite-scroll-disabled="busy" infinite-scroll-distance="60" infinite-scroll-immediate-check="false">
        <shopList :geohash="geohash" :restaurantCategoryIds="restaurant_category_ids" :orderBy="order_by" :supportIds="support_ids" :deliveryMode="delivery_mode" :sureStatus="sureStatus"></shopList>
      </ul>
    </div>
</template>
<script>
  import shopList from '@/pages/sell/shopList'
  import { mapActions, mapGetters } from 'vuex'
  import { getLocation, getCategory, getActivityDelivery, getActivitySupport } from '@/pages/service/getData'
  import { getImgPath } from '@/components/common/mixin'

  export default {
    data () {
      return {
        foodTitle: '',
        categoryTitle: '',
        sortTitle: '排序',
        sortBy: '', // ɸѡ?????
        order_by: '', // ?????
        delivery_mode: null, // ??ģʽ
        support_ids: [], // ??????
        category: null,
        subCategories: null,
        activityDelivery: null,
        activitySupport: null,
        restaurant_category_id: '',
        restaurant_category_ids: '',
        filterNum: 0,
        sureStatus: false
      }
    },
    computed: {
      ...mapGetters(['doneLatitude', 'doneLongitude'])
    },
    mounted () {
      this.initData()
    },
    mixins: [ getImgPath ],
    methods: {
      async initData () {
        this.geohash = this.$route.query.geohash
        if (!this.doneLatitude) {
          await this.getsite()
        }
        this.categoryTitle = this.$route.query.filter_key.split('&')[1].split('=')[1]
        this.filter = this.$route.query.filter_key.split('&')[0]
        let start = this.filter.search('restaurant_category_id') + 30
        let end = this.filter.search(',"name":')
        let subId = this.filter.slice(start, end)
        this.foodTitle = this.categoryTitle
        this.restaurant_category_id = parseInt(subId)
        this.getCategoryData()
        this.getActivityData()
      },
      // 获取地址
      async getsite () {
        await getLocation(this.geohash).then((res) => {
          this.siteData = res.data
          // 记录当前地址
          this.RECORD_ADDRESS(this.siteData)
        })
      },
      ...mapActions(['RECORD_ADDRESS']),
      // 获取分类地址
      async getCategoryData () {
        await getCategory(this.doneLatitude, this.doneLongitude).then((res) => {
          this.category = res.data
          this.category.forEach(item => {
            if (this.restaurant_category_id === item.id) {
              this.subCategories = item.sub_categories
              this.restaurant_category_ids = item.sub_categories[0].id
            }
          })
        })
      },
      // 分类选择
      chooseType (type) {
        if (this.sortBy !== type) {
          this.sortBy = type
          if (type === 'food') {
            this.categoryTitle = '分类'
          }
        } else {
          this.sortBy = ''
          if (type === 'food') {
            this.categoryTitle = this.foodTitle
          }
        }
      },
      selectCategory (item, index) {
        if (index === 0) {
          this.sortBy = ''
        } else {
          this.restaurant_category_id = item
        }
        this.subCategories = this.category[index].sub_categories
      },
      getCategoryId (item, index) {
        this.restaurant_category_ids = item
        this.categoryTitle = this.subCategories[index].name
        this.sortBy = ''
      },
      // 排序
      getSort (event) {
        this.order_by = event.target.getAttribute('data')
        this.sortBy = ''
        this.sortTitle = event.target.getAttribute('data-name')
      },
      // 派送方式
      getDelivery (id) {
        if (this.delivery_mode !== id) {
          this.delivery_mode = id
          this.filterNum ++
        } else {
          this.delivery_mode = null
          this.filterNum --
        }
      },
      // 商家属性
      selectSupportIds (id, index) {
        this.support_ids.splice(index, 1, {status: !this.support_ids[index].status, id: id})
        this.filterNum = this.delivery_mode === null ? 0 : 1
        this.support_ids.forEach((item) => {
          if (item.status) {
            this.filterNum++
          }
        })
      },
      // 获取商家属性数据
      getActivityData () {
        getActivityDelivery(this.doneLatitude, this.doneLongitude).then((res) => {
          this.activityDelivery = res.data
        })
        getActivitySupport(this.doneLatitude, this.doneLongitude).then((res) => {
          this.activitySupport = res.data
          this.activitySupport.forEach((item, index) => {
            this.support_ids[index] = {status: false, id: item.id}
          })
        })
      },
      clear () {
        this.support_ids.map((item) => { item.status = false })
        this.filterNum = 0
      },
      sure () {
        this.sortBy = ''
        this.sureStatus = !this.sureStatus
      }
    },
    components: {
      shopList
    }
  }
</script>
<style type="text/css">
  @import '../../../../style/search.css';
  @import '../../../../style/food.css';

  .ElemeHeader-wrapper_3axzyZv {
    position: relative;
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
    justify-content: space-between;
    width: 100%;
    height: 1.173333rem;
    color: #fff;
    font-size: .48rem
  }
  .ElemeHeader-wrapper_3axzyZv.ElemeHeader-fixed_7Iy4oAG {
    position: fixed;
    top: 0;
    left: 0
  }
  .ElemeHeader-left_2Jd8GcR {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 1.173333rem;
    height: 1.173333rem
  }
  .ElemeHeader-left_2Jd8GcR svg {
    display: block;
    width: .586667rem;
    height: .586667rem
  }
  .ElemeHeader-center__Vl_mYE {
    position: absolute;
    top: 0;
    left: 50%;
    height: 1.173333rem;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 1em;
    line-height: 1.173333rem;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
  }
</style>
