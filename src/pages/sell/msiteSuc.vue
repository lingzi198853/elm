<template>
  <div>
    <foodmenu></foodmenu>
    <h3 class="index-title">推荐商家</h3>
    <shopList></shopList>
  </div>
</template>
<script>
  import foodmenu from '@/pages/sell/foodmenu'
  import shopList from '@/pages/sell/shopList'

  export default {
    components: {
      foodmenu,
      shopList
    }
  }
</script>
