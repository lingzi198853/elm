<template>
  <div class="discover">
    <discoverEntry></discoverEntry>
    <discoverActivity></discoverActivity>
    <footerguide></footerguide>
  </div>
</template>

<script>
  import discoverEntry from './discoverEntry'
  import discoverActivity from './discoverActivity'
  import footer from '@/components/footer/footer'

  export default {
    components: {
      discoverEntry,
      discoverActivity,
      'footerguide': footer
    }
  }
</script>
<style scoped>
  @import '../../style/discover.css';
  /* header.css */
   section {
     margin-bottom: .28rem;
     background: #fff;
     border-top: 1px solid #eee;
     border-bottom: .013333rem solid #eee
   }
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
