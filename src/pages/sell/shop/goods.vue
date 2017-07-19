<template>
  <div class="menuview-2hUkG">
    <div class="menuview-2iJo3" style="display: none;">
      <img src="//github.elemecdn.com/eleme/fe-static/1cb05f59/media/empty/no-food.png">
      <p>没有商品</p>
      <p>该商家还未上传商品</p>
    </div>
    <div class="menuview-17K3g">
      <main class="menuview-i6fQ3">
        <div class="menu-wrapper" ref="menuWrapper">
          <ul class="menucategory-29kyE menuview-2_lFf" category-index="1">
            <li class="menucategory-3e27M menucategory-2MBNs" :class="{'menucategory-JnDmc':currentIndex===index}" v-for="(item, index) in shopMenu" :key="index" @click="selectMenu(index, $event)">
              <img v-if="item.icon_url !== ''" :src="getImgPath(item.icon_url)" class="menucategory-375ij">
              <span class="menucategory-qwsbd">{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="foods-wrapper" ref="foodsWrapper">
          <div data-v-81584c58="" class="scroller">
            <dl data-v-81584c58="" class="food-list-hook" v-for="(item, index) in shopMenu" :key="item.id">
              <dt data-v-81584c58="">
                <div data-v-81584c58="" class="category-title"> <strong data-v-81584c58="" class="category-name">{{item.name}}</strong>
                  <span data-v-81584c58="" class="category-description">{{item.description}}</span>
                </div>
                <div data-v-81584c58="" class="category-more">
                  <span data-v-81584c58="" class="icon" @click="showTextEvent(index)"></span>
                  <p data-v-81584c58="" class="popup" v-show="showtext[index].status" @click="showTextEvent(index)">
                    <span data-v-81584c58="">{{item.name}}</span>
                    <span data-v-81584c58="">{{item.description}}</span>
                  </p>
                </div>
              </dt>
              <dd data-v-81584c58="" class="" v-for="(item, index) in item.foods" :key="index">
                <span data-v-81584c58="" class="foodimg">
                  <img data-v-81584c58="" :src="getImgPath(item.image_path)"></span>
                <section data-v-81584c58="" class="foodinfo">
                  <header data-v-81584c58="" class="foodtitle">
                    <span data-v-81584c58="">{{item.name}}</span>
                     </header>
                  <p data-v-81584c58="" class="fooddescription">{{item.description}}</p>
                  <p data-v-81584c58="" class="foodsales">
                    <span data-v-81584c58="">月售{{item.month_sales}}份</span>
                    <span data-v-81584c58="">好评率{{item.satisfy_rate}}%</span>
                  </p>
                   <strong data-v-81584c58="" class="foodprice"><span data-v-81584c58="">{{item.specfoods[0].price}}</span>                    
                    </strong> 
                    <div data-v-f433384a="" class="cartbutton"><cartControl :food="item"></cartControl></div>
                </section>
              </dd>
            </dl>
          </div>
        </div>
      </main>
    </div>
    <shopCart :deliveryPrice="seller.float_delivery_fee" :minPrice="seller.float_minimum_order_amount" :selectFoods="selectFoods"></shopCart>
  </div>
</template>
<script>
  import ngeohash from 'ngeohash'
  import { goodsData } from '@/pages/service/getData'
  import shopCart from '@/pages/sell/shop/shopCart'
  import cartControl from '@/pages/sell/shop/cartControl'
  import { getImgPath } from '@/components/common/mixin'
  import BScroll from 'better-scroll'

  export default {
    data () {
      return {
        showtext: [],
        shopMenu: [],
        listHeight: [],
        scrollY: 0
      }
    },
    props: {
      seller: Object
    },
    mounted () {
      this.initData()
    },
    computed: {
      currentIndex () {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i]
          let height2 = this.listHeight[i + 1]
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i
          }
        }
        return 0
      },
      selectFoods () {
        let foods = []
        this.shopMenu.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food)
            }
          })
        })
        return foods
      }
    },
    mixins: [ getImgPath ],
    methods: {
      async initData () {
        this.geohash = this.$route.query.geohash
        this.id = this.$route.query.id
        let geo = ngeohash.decode(this.geohash)
        this.latitude = geo.latitude
        this.longitude = geo.longitude
        this.shopMenu = await goodsData.goodsMenu(this.id)
        this.shopMenu.forEach((item, index) => {
          this.showtext[index] = {status: false}
        })
        this.$nextTick(() => {
          this._initScroll()
          this._calculateHight()
        })
      },
      _initScroll () {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        })
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          probeType: 3
        })
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
      },
      _calculateHight () {
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      },
      selectMenu (index, event) {
        if (!event._constructed) {
          return
        }
        let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        let el = foodList[index]
        this.foodsScroll.scrollToElement(el, 300)
      },
      showTextEvent (index) {
        this.showtext.splice(index, 1, {status: !this.showtext[index].status})
      }
    },
    components: {
      cartControl,
      shopCart
    }
  }
</script>
<style type="text/css">
  .menucategory-29kyE {
    overflow-y: auto;
    height: 100%;
    background-color: #f8f8f8;
    -webkit-overflow-scrolling: touch
  }

  .menucategory-3e27M {
    position: relative;
    padding: .466667rem .2rem;
    border-bottom: 1px solid #ededed;
    font-size: .346667rem;
    color: #666
}

  .menucategory-3e27M.menucategory-JnDmc {
    background-color: #fff;
    border-right-color: #fff;
    font-weight: bolder
  }

  .menucategory-3e27M.menucategory-JnDmc:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: .08rem;
    background-color: #3190e8
  }

  .menucategory-3e27M:not(.menucategory-2MBNs) .menucategory-qwsbd {
    line-height: 1.2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical
  }

  .menucategory-28BIn {
    position: absolute;
    right: .08rem;
    top: .08rem;
    color: #fff;
    background-color: #ff461d;
    border-radius: .2rem;
    font-size: .266667rem;
    font-weight: 700;
    text-align: center;
    min-width: .373333rem;
    padding: 0 .106667rem;
    line-height: .373333rem
  }

  .menucategory-375ij {
    width: .24rem;
    height: .333333rem
  }
  .menuview-2hUkG {
    height: 100%;
    box-sizing: border-box
  }

  .menuview-2hUkG *,
  :after,
  :before {
    box-sizing: inherit
  }

  .menuview-2hUkG h3,
  .menuview-2hUkG p,
  .menuview-2hUkG ul {
    margin: 0
  }

  .menuview-2hUkG ul {
    padding: 0
  }

  .menuview-2hUkG img {
    max-width: 100%
  }

  .menuview-2hUkG ul {
    list-style: none
  }

  .menuview-17K3g {
    height: 100%;
    padding-bottom: 1.28rem;
    background-color: #fff
  }

  .menuview-17K3g.menuview-1bQp_,
  .menuview-17K3g.menuview-2UEJ0 {
    padding-bottom: 0
  }

  .menuview-2iJo3 {
    padding: .666667rem 0;
    text-align: center;
    font-size: .426667rem;
    color: #333;
    background-color: #eee
  }

  .menuview-2iJo3 p {
    padding: 0;
    margin: 0;
    line-height: .853333rem
  }

  .menuview-2iJo3 img {
    width: 40%
  }

  .menuview-i6fQ3 {
    display: flex;
    position: absolute;
    top: 184px;
    bottom: 52px;
    width: 100%;
    overflow: hidden;
  }

  .menuview-2_lFf {
      width: 2.266667rem;
      height: 100%
  }

  .foods-wrapper {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      display: block;
      width: 0;
      height: 100%
  }

  .menuview-2bWpI {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 3;
      line-height: 1.333333rem;
      font-size: .48rem;
      background-color: rgba(0, 0, 0, .7);
      color: #ccc;
      text-align: center
  }
  /* right */
  .container[data-v-81584c58] {
      position: relative;
      height: 100%
  }

  .container .scroller[data-v-81584c58] {
      height: 100%;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch
  }

  dl.onlyddst dd[data-v-81584c58] {
      margin-left: 0;
      box-shadow: 0 1px 0 0 #ddd
  }

  dl.onlylist .foodprice[data-v-81584c58] {
      font-size: .533333rem
  }

  dl.onlylist .foodimg[data-v-81584c58] {
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      width: 2.133333rem;
      height: 2.133333rem
  }

  dl.onlylist .foodtitle[data-v-81584c58] {
      font-size: .48rem
  }

  dl.onlylist dd[data-v-81584c58] {
      padding: .333333rem;
      min-height: none
  }

  dl[data-v-81584c58] {
      margin: 0
  }

  dd[data-v-81584c58] {
      position: relative;
      background-color: #fff;
      margin: 0;
      padding: .4rem .266667rem;
      margin-bottom: 1px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      min-height: 2.933333rem
  }

  dd[data-v-81584c58]:not(:last-child) {
      box-shadow: .4rem .013333rem 0 0 #ddd
  }

  dd.new[data-v-81584c58]:before {
      content: "";
      background-image: -webkit-linear-gradient(315deg, #4cd964 50%, transparent 0);
      background-image: linear-gradient(135deg, #4cd964 50%, transparent 0);
      position: absolute;
      width: .746667rem;
      height: .746667rem;
      z-index: 1;
      left: 0;
      top: -1px;
      font-weight: 700;
      font-size: .24rem
  }

  dd.new[data-v-81584c58]:after {
      content: "\65B0\54C1";
      z-index: 2;
      position: absolute;
      left: .013333rem;
      top: .12rem;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      color: #fff;
      font-size: .226667rem
  }

  dt[data-v-81584c58] {
      position: relative;
      padding: .2rem .266667rem;
      background-color: #f1f1f1
  }

  .category-title[data-v-81584c58] {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: flex-end;
      overflow: hidden
  }

  .category-title strong[data-v-81584c58] {
      margin-right: .133333rem;
      font-weight: 700;
      font-size: .373333rem;
      color: #666;
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none
  }

  .category-title span[data-v-81584c58] {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      display: block;
      width: 0;
      color: #999;
      font-size: .266667rem;
      white-space: nowrap;
      overflow: hidden
  }

  .category-more .icon[data-v-81584c58] {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: .933333rem;
      z-index: 2;
      background: #f1f1f1 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAAAXNSR0IArs4c6QAAAFhJREFUOBFjYBgFoyEwGgKMs2bN8gQGwyxoUKQBwXZswUKuOhaQ4f///5cBGcrIyAiySBbExgLIUseExSCqCoEsSAO6/AkIg9h4TKe2OjxWjUqNhsDwCgEACvMiGUpibN4AAAAASUVORK5CYII=) 50% no-repeat;
      background-size: .32rem auto
  }

  .category-more .popup[data-v-81584c58] {
      position: absolute;
      background-color: #39373a;
      opacity: .97;
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: top right;
      transform-origin: top right;
      width: 63%;
      right: .133333rem;
      z-index: 3;
      color: #eee;
      font-size: .32rem;
      border-radius: .106667rem;
      padding: .24rem .266667rem;
      -webkit-transition: all .3s ease;
      transition: all .3s ease;
      cursor: pointer
  }

  .category-more .popup[data-v-81584c58]:before {
      content: "";
      position: absolute;
      top: 0;
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      right: .266667rem;
      border: .133333rem solid transparent;
      border-bottom-color: #39373a
  }

  .category-more .popup span[data-v-81584c58]:first-child {
      color: #fff
  }

  .category-more .popup-enter[data-v-81584c58],
  .category-more .popup-leave[data-v-81584c58] {
      opacity: 0!important;
      -webkit-transform: scale(.5)!important;
      transform: scale(.5)!important
  }

  .category-more:after {
      content: "";
      position: absolute
  }

  .cartbutton {
      position: absolute;
      right: 0;
      bottom: -.066667rem
  }
  .cartbutton > span {
    flex:none;
    display: block;
    width: auto;
    text-align: right;
  }
  .foodimg[data-v-81584c58] {
      margin-right: 4%;
      -webkit-box-flex: 2;
      -ms-flex: 2;
      flex: 2;
      display: block;
      width: 0;
      vertical-align: top
  }

  .foodimg img[data-v-81584c58] {
      width: 100%;
      border-radius: .053333rem
  }

  .foodinfo[data-v-81584c58] {
      position: relative;
      -webkit-box-flex: 8;
      -ms-flex: 8;
      flex: 8;
      display: block;
      width: 0;
      padding-bottom: .666667rem
  }

  .foodtitle[data-v-81584c58] {
      font-size: .4rem;
      font-weight: 700;
      line-height: 1.1;
      overflow: hidden;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between
  }

  .foodtitle span[data-v-81584c58] {
      vertical-align: middle
  }

  .foodattributes[data-v-81584c58] {
      line-height: .32rem;
      margin-left: .24rem;
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none
  }

  .foodattributes span[data-v-81584c58] {
      display: inline-block;
      vertical-align: middle;
      padding: .04rem .066667rem;
      line-height: 100%;
      text-align: center;
      border: 1px solid currentColor;
      color: #fff;
      font-size: .213333rem;
      border-radius: .266667rem
  }

  .foodattributes span[data-v-81584c58]:not(:last-child) {
      margin-right: .08rem
  }

  .quantity-tip[data-v-81584c58] {
      background-color: #ff461d;
      border-radius: .053333rem;
      font-size: .266667rem;
      color: #fff;
      padding: .026667rem .066667rem;
      vertical-align: middle
  }

  .fooddescription[data-v-81584c58] {
      margin: .133333rem 0;
      font-size: .253333rem;
      color: #999
  }

  .foodsales[data-v-81584c58] {
      margin: .173333rem 0;
      color: #666;
      font-size: .293333rem;
      line-height: 1
  }

  .foodsales p[data-v-81584c58] {
      margin-right: .106667rem
  }

  .foodsales span[data-v-81584c58] {
      vertical-align: middle
  }

  .foodsales>span[data-v-81584c58]:not(:first-child) {
      margin-left: .106667rem;
      vertical-align: middle
  }

  .foodactivity[data-v-81584c58] {
      font-size: .32rem;
      -webkit-transform: scale(.8);
      transform: scale(.8);
      -webkit-transform-origin: left;
      transform-origin: left;
      white-space: nowrap
  }

  .foodactivity span[data-v-81584c58] {
      display: inline-block
  }

  .foodactivity span[data-v-81584c58]:first-child {
      border: 1px solid currentColor
  }

  .foodactivity span[data-v-81584c58]:nth-of-type(2) {
      color: #fff;
      border: 1px solid currentColor
  }

  .foodprice[data-v-81584c58] {
      position: absolute;
      left: 0;
      bottom: 0;
      font-weight: 700;
      font-size: .426667rem;
      line-height: .426667rem;
      color: #f60
  }

  .foodprice[data-v-81584c58]:before {
      font-weight: 400;
      content: "\A5";
      font-size: .293333rem;
      display: inline-block
  }

  .foodprice-lowest[data-v-81584c58] {
      margin-left: .053333rem;
      font-size: .32rem;
      color: #666;
      font-weight: 400
  }

  .foodprice-origin[data-v-81584c58] {
      font-size: .32rem;
      color: #999;
      font-weight: 400;
      vertical-align: top
  }

</style>
