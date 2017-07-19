<template>
    <div>
        <footer class="cartview-216zx">
          <div class="cartview-bIr0V" style="z-index: 10;" v-show="toggleCart"></div>
          <div class="cartview-JFaw9 cartview-2CbR7" style="z-index: 11;" v-show="toggleCart">
            <section class="discount-tip-1sl_7_0" opened="true">此处为原价，「去结算」享优惠哦</section>
            <div class="cartview-37dYf"><span class="cartview-2IL0z">购物车</span>
                <a href="javascript:" class="cartview-3ElqP">
                    <svg>
                      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-remove"></use>
                    </svg> <span>清空</span></a>
            </div>
            <div class="entityList-yrs9v_0">
                <ul>
                    <li class="entityList-1eODF_0" v-for="item in selectFoods" :key="item.id">
                    <span class="entityList-30u-R_0">
                      <em class="entityList-2g5ra_0">{{item.name}}</em>
                      <p class="entityList-1IZul_0"></p>
                    </span>
                    <span class="entityList-1vr8H_0">
                      <span class="entityList-1XZvm_0">{{item.specfoods[0].price * item.count}}</span>
                    </span>
                    <cartControl :food="item"></cartControl>
                    </li>
                </ul>
                <div class="entityList-1eODF_0 entityList-2NcdP_0"><span class="entityList-30u-R_0">餐盒</span> <span class="entityList-1vr8H_0">{{totalCount}}</span> <span class="entityList-3cAE9_0"></span></div>
            </div>
          </div>
          <div class="bottomNav-3XM6c_0" style="z-index: 11;" @click="showCartList()"><span :attr-quantity="totalCount" class="bottomNav-18KRG_0" :class="{'bottomNav-6KjUI_0':totalPrice <= 0}"></span>
              <div>
                  <p class="bottomNav-3Ak_E_0"><span>¥{{totalPrice}}</span>
                  </p>
                  <p class="bottomNav-3zqFz_0">配送费¥{{deliveryPrice}}</p>
              </div> <a href="javascript:" class="bottomNav-1urxC_0" :class="{'bottomNav-9FCIh_0':totalPrice <= 0}">{{status}}</a></div>
        </footer>
    </div>
</template>
<script>
  import cartControl from '@/pages/sell/shop/cartControl'

  export default {
    data () {
      return {
        toggleCart: false
      }
    },
    props: {
      deliveryPrice: Number,
      minPrice: Number,
      selectFoods: Array
    },
    computed: {
      totalPrice () {
        let total = 0
        this.selectFoods.forEach((food) => {
          total += food.specfoods[0].price * food.count
        })
        return total
      },
      totalCount () {
        let count = 0
        this.selectFoods.forEach((food) => {
          count += food.count
        })
        return count
      },
      status () {
        let diff = this.minPrice - this.totalPrice
        if (!this.totalPrice) {
          return `还差¥${this.minPrice}起送`
        } else if (diff > 0) {
          return `还差¥${diff}起送`
        } else {
          return '去结算'
        }
      }
    },
    methods: {
      showCartList () {
        if (this.totalCount > 0) {
          this.toggleCart = !this.toggleCart
        }
      }
    },
    components: {
      cartControl
    }
  }
</script>
<style type="text/css">
  .cartview-216zx {
      font-size: .426667rem
  }
  .cartview-JFaw9 {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: #fff;
      -webkit-transition: all .35s ease;
      transition: all .35s ease;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
      bottom: 1.813333rem
  }
  .cartview-2CbR7 {
      bottom: 1.28rem
  }
  .cartview-2CbR7,
  .cartview-3x5Do,
  .cartview-aUsPc {
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
  }
  .cartview-2qq7p,
  .cartview-17Ngi {
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0)
  }
  .cartview-bIr0V {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #000;
      opacity: .4;
      -webkit-transition: opacity .35s ease;
      transition: opacity .35s ease
  }
  .cartview-SGUbl,
  .cartview-zoBt4 {
      opacity: .4
  }
  .cartview-3Jm1p,
  .cartview-3wLdN {
      opacity: 0
  }
  .cartview-37dYf {
      padding: 0 .333333rem;
      border-bottom: 1px solid #ddd;
      background-color: #eceff1;
      color: #666;
      line-height: 1.066667rem
  }
  .cartview-2IL0z {
      padding-left: .133333rem;
      border-left: .093333rem solid #3190e8
  }
  .cartview-3ElqP {
      float: right;
      padding-left: .4rem;
      background-size: .266667rem;
      color: #666;
      text-decoration: none;
      font-size: .346667rem
  }
  .cartview-3ElqP svg {
      width: .306667rem;
      height: .346667rem;
      fill: #ddd
  }
  .bottomNav-3XM6c_0 {
      position: fixed;
      right: 0;
      bottom: 0;
      left: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding-left: 2.106667rem;
      background-color: #3d3d3f;
      height: 1.28rem;
      opacity: .95
  }
  .bottomNav-18KRG_0 {
      position: absolute;
      left: .32rem;
      bottom: .2rem;
      width: 1.333333rem;
      height: 1.333333rem;
      box-sizing: border-box;
      border-radius: 100%;
      background-color: #3190e8;
      border: .133333rem solid #444;
      box-shadow: 0 -.08rem .053333rem 0 rgba(0, 0, 0, .1);
      will-change: transform
  }
  .bottomNav-18KRG_0:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiMyMDczQzEiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG9wYWNpdHk9Ii4xIiBtYXNrPSJ1cmwoI2MpIi8+PC9nPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSI2IiBkPSJNOS4zNzQgMTguNzIyUzcuODY4IDExLjI4MyA3LjMyMyA4LjcxQzYuNzc4IDYuMTM2IDUuODYgNS4zMyAzLjk3OCA0LjUyIDIuMDk2IDMuNzEzLjM2NyAyLjI4Ni4zNjcgMi4yODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjQ2IiBjeT0iNTEiIHI9IjQiIGZpbGw9IiNGRkYiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==) 50% no-repeat;
      background-size: .6rem;
      content: ""
  }
  .bottomNav-18KRG_0.bottomNav-6KjUI_0 {
      background-image: -webkit-radial-gradient(circle, #363636 .626667rem, #444 0);
      background-image: radial-gradient(circle, #363636 .626667rem, #444 0)
  }
  .bottomNav-18KRG_0.bottomNav-6KjUI_0:before {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OCA1OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIHg9Ii01MCUiIHk9Ii01MCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxLjUiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOCAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiLz48ZmVNZXJnZT48ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPjxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIvPjwvZmVNZXJnZT48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTcuNjE0IDQuMDUxYy0xLjA2Ni4wODYtMS40NTItLjM5OC0xLjc1Mi0xLjU4NEM1LjU2MiAxLjI4LjMzIDUuODguMzMgNS44OGwzLjcxIDE5LjQ3NmMwIC4xNDgtMS41NiA3LjUxNS0xLjU2IDcuNTE1LS40ODkgMi4xOS4yOTIgNC4yNyAzLjU2IDQuMzIgMCAwIDM2LjkxNy4wMTcgMzYuOTIuMDQ3IDEuOTc5LS4wMTIgMi45ODEtLjk5NSAzLjAxMy0zLjAzOS4wMy0yLjA0My0xLjA0NS0yLjk3OC0yLjk4Ny0yLjk5M0w4LjgzIDMxLjE5MnMuODYtMy44NjUgMS4wNzctMy44NjVjMCAwLTUuNzg4LjEyMiAzMi4wNjUtMS45NTYuNjA2LS4wMzMgMi4wMTgtLjc2NCAyLjI5OC0xLjg0OCAxLjExMy00LjMxNyA0LjAwOC0xMy4yNiA0LjQ1OC0xNS42NC45MzItNC45MjUgMi4wNjEtOC41NTgtNC4yOC03LjQwNSAwIDAtMzUuNzY4IDMuNDg3LTM2LjgzMyAzLjU3M3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWx0ZXI9InVybCgjYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMikiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDM4IDcuODA4KSI+PG1hc2sgaWQ9ImMiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2IiLz48L21hc2s+PHVzZSBmaWxsPSIjNUY1RjYzIiB4bGluazpocmVmPSIjYiIvPjxwYXRoIGZpbGw9IiNFQkVFRjMiIGQ9Ik01My45NjIgNy43NzRsLTUuNzAxIDE5LjMwNS00MC43OCAxLjU3NHoiIG9wYWNpdHk9Ii4wNSIgbWFzaz0idXJsKCNjKSIvPjwvZz48cGF0aCBzdHJva2U9IiM1RjVGNjMiIHN0cm9rZS13aWR0aD0iNiIgZD0iTTkuMzc0IDE4LjcyMlM3Ljg2OCAxMS4yODMgNy4zMjMgOC43MUM2Ljc3OCA2LjEzNiA1Ljg2IDUuMzMgMy45NzggNC41MiAyLjA5NiAzLjcxMy4zNjcgMi4yODYuMzY3IDIuMjg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSI0NiIgY3k9IjUxIiByPSI0IiBmaWxsPSIjNUY1RjYzIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI1MSIgcj0iNCIgZmlsbD0iIzVGNUY2MyIvPjwvZz48L3N2Zz4=)
  }
  .bottomNav-18KRG_0.bottomNav-6KjUI_0:after {
      visibility: hidden
  }
  .bottomNav-18KRG_0:after {
      position: absolute;
      right: -.12rem;
      top: -.133333rem;
      line-height: 1;
      background-color: #ff461d;
      color: #fff;
      border-radius: .32rem;
      padding: .053333rem .133333rem;
      content: attr(attr-quantity);
      font-size: .266667rem
  }
  .bottomNav-18KRG_0.bottomNav-3oMX6_0 {
      -webkit-animation: bottomNav-3oMX6_0 .5s ease-in-out;
      animation: bottomNav-3oMX6_0 .5s ease-in-out
  }
  @-webkit-keyframes bottomNav-3oMX6_0 {
      0% {
          -webkit-transform: scale(1);
          transform: scale(1)
      }
      25% {
          -webkit-transform: scale(.8);
          transform: scale(.8)
      }
      50% {
          -webkit-transform: scale(1.1);
          transform: scale(1.1)
      }
      75% {
          -webkit-transform: scale(.9);
          transform: scale(.9)
      }
      to {
          -webkit-transform: scale(1);
          transform: scale(1)
      }
  }

  @keyframes bottomNav-3oMX6_0 {
      0% {
          -webkit-transform: scale(1);
          transform: scale(1)
      }
      25% {
          -webkit-transform: scale(.8);
          transform: scale(.8)
      }
      50% {
          -webkit-transform: scale(1.1);
          transform: scale(1.1)
      }
      75% {
          -webkit-transform: scale(.9);
          transform: scale(.9)
      }
      to {
          -webkit-transform: scale(1);
          transform: scale(1)
      }
  }

  .bottomNav-3Ak_E_0 {
      font-size: .48rem;
      line-height: normal;
      color: #fff
  }

  .bottomNav-2EnBe_0 {
      font-size: .8em;
      opacity: .8
  }

  .bottomNav-3zqFz_0 {
      color: #f5f5f5;
      font-size: .266667rem
  }

  .bottomNav-2lSPe_0 {
      border-left: 1px solid #666;
      margin-left: .133333rem;
      padding-left: .133333rem;
      font-size: .32rem;
      color: #999;
      display: table
  }

  .bottomNav-2lSPe_0 em {
      font-style: normal
  }

  .bottomNav-1urxC_0 {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 2.8rem;
      background-color: #4cd964;
      color: #fff;
      text-align: center;
      text-decoration: none;
      font-size: .4rem;
      font-weight: 700;
      line-height: 1.28rem
  }

  .bottomNav-1urxC_0.bottomNav-9FCIh_0 {
      background-color: #535356
  }
  .discount-tip-1sl_7_0 {
      background-color: #fffad6;
      border-top: 1px solid #f9e8a3;
      opacity: .96;
      line-height: .533333rem;
      font-size: .266667rem;
      text-align: center
  }
  .entityList-yrs9v_0 {
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      max-height: 8rem
  }

  .cartlist {
      margin: 0;
      padding: 0
  }

  .entityList-1eODF_0 {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: .2rem .333333rem .2rem 0;
      min-height: 1.466667rem;
      margin-left: .333333rem
  }

  .entityList-1eODF_0:not(:last-child) {
      border-bottom: 1px solid #eee
  }

  .entityList-1eODF_0.entityList-2NcdP_0 {
      border-top: 1px solid #eee
  }

  .entityList-30u-R_0 {
      -webkit-box-flex: 5.5;
      -ms-flex: 5.5;
      flex: 5.5;
      line-height: normal
  }

  .entityList-30u-R_0.entityList-2l2zO_0 .entityList-2g5ra_0 {
      max-width: 2.666667rem
  }

  .entityList-30u-R_0 .entityList-2g5ra_0 {
      display: inline-block;
      font-style: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
      max-width: 4.666667rem
  }

  .entityList-30u-R_0 .entityList-mAUsa_0 {
      font-style: normal;
      display: inline-block;
      vertical-align: middle;
      padding: 0 .066667rem;
      background-color: #ff461d;
      border-radius: .053333rem;
      line-height: .373333rem;
      color: #fff;
      font-size: .28rem
  }

  .entityList-30u-R_0 .entityList-16arg_0 {
      display: block;
      margin-top: .066667rem;
      font-style: normal;
      color: #999;
      font-size: .266667rem
  }

  .entityList-1IZul_0 {
      white-space: nowrap;
      line-height: .333333rem;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #999;
      font-size: .266667rem
  }

  .entityList-1vr8H_0 {
      -webkit-box-flex: 2.5;
      -ms-flex: 2.5;
      flex: 2.5;
      color: #f60;
      text-align: right;
      white-space: nowrap;
      font-weight: 700
  }

  .entityList-1XZvm_0:before {
      content: "\A5";
      font-size: .266667rem;
      color: currentColor
  }

  .entityList-35KI-_0 {
      margin-right: .133333rem;
      font-size: .266667rem;
      color: #999;
      font-weight: 400
  }

</style>
