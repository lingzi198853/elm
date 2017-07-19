<template>
  <!-- 选择地址 -->
  <transition name="move">
    <div class="poi-3TsQq_0">
      <form class="poi-2PxTv_0">
        <svg class="poi-1bd4J_0" @click="up">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
        </svg>
        <div class="poi-2T3Ra_0">选择地址</div>
        <input type="search" placeholder="请输入地址" autofocus="autofocus" class="poi-i4JjZ_0" v-model="inputValue" @keyup="searchPos()"></form>
      <div class="poi-3ndyq_0"></div>
      <section style="">
        <div class="AddressCell-BfZ31_0" v-for="(item, index) in posData" @click="choosePos(item.geohash, item.latitude, item.longitude, item.name)">
          <p>
            <span class="AddressCell-3dWFD_0">{{item.name}}</span> 
            <span class="AddressCell-2NFpU_0"></span>
          </p>
          <p class="AddressCell-2WH1g_0">{{item.address}}</p>
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
  import { searchPosition } from '@/pages/service/getData'
  import { setStore } from '@/util/localStore'

  export default {
    data () {
      return {
        inputValue: '',   // 输入框值
        latitude: '',     // 纬度
        longitude: '',    // 经度
        posData: [],       // 搜索结果列表
        geohash: ''      // 地址geohash值
      }
    },
    props: {
      togglesitePage: Boolean // 默认隐藏地址搜索列表
    },
    methods: {
      up () {
        this.$emit('toggle', false) // 主动触发upup方法，'hehe'为向父组件传递的数据
      },
      searchPos () {
        if (this.inputValue) {
          searchPosition(this.inputValue).then((res) => {
            this.posData = res.data
          })
        }
      },
      choosePos (geohash, latitude, longitude, name) {
        this.storePos(geohash, latitude, longitude)
        this.$emit('toggle', false, name)
      },
      // 存储位置
      storePos (geohash, latitude, longitude) {
        let location = JSON.stringify({'location': {'geohash': geohash, 'latitude': latitude, 'longitude': longitude}})
        setStore('STORE', location)
      }
    }
  }

</script>
