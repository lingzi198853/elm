<template>
  <div>Clicked: <mark>{{c}}</mark> times</div>
</template>

<script>
  export default {
    data () {
      return {
        c: 0
      }
    },
    created () {
      this.$root.eventHub.$on('inc', (num) => {
        this.c = num
      })
    }
  }
</script>
