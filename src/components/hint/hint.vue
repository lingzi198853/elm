<template>
  <transition name="MessageToast" :duration="{ enter: 500, leave: 800 }">
    <div class="MessageToast-wrapper">
      {{hintText}}
    </div>
  </transition>
 
</template>
<script>
export default {
  props: {
    hintText: String
  }
}
</script>
<style type="text/css" scoped>
  .MessageToast-wrapper {
    position: fixed;
    bottom: 2.56rem;
    left: 50%;
    z-index: 9999;
    padding: .266667rem .533333rem;
    border-radius: .533333rem;
    background: rgba(0, 0, 0, .6);
    color: #fff;
    font-size: .32rem;
    line-height: 1.2;
    -webkit-transition: opacity .5s;
    transition: opacity .5s;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    pointer-events: none
  }

  .MessageToast-enter,
  .MessageToast-leave-active {
    opacity: 0
  }
</style>
