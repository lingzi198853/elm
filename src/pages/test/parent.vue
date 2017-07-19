<template>
<div>
  <h1 @click="goson()">Hi!I'm the father{{msg}}</h1>
  <child @upup="change" :msg="msg"></child>
</div>
  
</template>

<script>
  import child from './child'

  export default {
    data () {
      return {
        msg: 'hello'
      }
    },
    methods: {
      goson () {
        this.msg = 'false'
      },
      change (msg, text) {
        this.msg = msg
      }
    },
    components: {
      child
    }
  }
</script>
