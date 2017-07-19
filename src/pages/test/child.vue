<template>
  <div @click="up">I'm the son{{msg}}</div>
</template>

<script>
  export default {
    props: {
      msg: String
    },
    methods: {
      up () {
        this.$emit('upup', 'World')
      }
    }
  }
</script>
