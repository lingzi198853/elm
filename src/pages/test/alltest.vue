<template>
  <div>
    <increment></increment>
    <div style="height:30px"></div>
    <display></display>
  </div>
</template>
<script>
  import Vue from 'vue'
  var bus = new Vue()

  Vue.component('increment', {
    template: '<button @click="add">+</button>',
    data () {
      return {count: 0}
    },
    methods: {
      add () {
        bus.$emit('inc', this.count += 1)
      }
    }
  })
  Vue.component('display', {
    template: '<div>Clicked: <mark>{{c}}</mark> times</div>',
    data () {
      return {
        c: 0
      }
    },
    created () {
      bus.$on('inc', (num) => {
        this.c = num
      })
    }
  })
</script>
