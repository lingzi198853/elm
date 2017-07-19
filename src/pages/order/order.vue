<template>
  <div>
    <subheader></subheader>
    <section class="nodatatipWrap NoDataTip-wrapper_1Gwf0tm" img="no-log" data-v-08f9d9b7=""><img src="//fuss10.elemecdn.com/f/18/9fb04779371b5b162b41032baf5f3gif.gif"> <h3>登录后查看外卖订单</h3> <!----> <button>
        立即登录
      </button></section>
    <footerguide></footerguide>
  </div>
</template>

<script>
  import subheader from '@/components/header/subheader'
  import footer from '@/components/footer/footer'
  export default {
    components: {
      subheader,
      'footerguide': footer
    }
  }
</script>

<style scoped>
  @import '../../style/order.css';
  .NoDataTip-wrapper_1Gwf0tm {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center
}
.NoDataTip-wrapper_1Gwf0tm img {
  display: block;
  width: 5.333333rem
}
.NoDataTip-wrapper_1Gwf0tm h3 {
  margin: .333333rem 0 .266667rem;
  color: #6a6a6a;
  font-weight: 400;
  font-size: .453333rem
}
.NoDataTip-wrapper_1Gwf0tm p {
  margin: 0 0 .333333rem;
  color: #999;
  font-size: .306667rem
}
.NoDataTip-wrapper_1Gwf0tm button {
  padding: .266667rem;
  min-width: 3.2rem;
  border: none;
  border-radius: .053333rem;
  background-color: #56d176;
  color: #fff;
  text-align: center;
  font-size: 1.2em;
  font-family: inherit
}
.NoDataTip-wrapper_1Gwf0tm.NoDataTip-fixed_3gTgcHC {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8866;
  padding: 0 0 10%;
  width: 100%;
  height: 100%;
  background: #fff
}
</style>

