<template>
  <div class="rating-wrapper_36aX1_0">
      <div class="rating-max_1MKzt_0">
          <svg v-for="item in 5">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
          </svg>
      </div>
      <div class="rating-rating_1ZAfX_0" :style="'width:' + rating*20 + '%'">
          <svg v-for="item in 5">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rating-star"></use>
          </svg>
      </div>
  </div>
</template>
<script>
  export default {
    props: {
      rating: Number
    }
  }
</script>

<style type="text/css">
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
</style>

