<template>
  <button @click="add">+</button>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      add () {
        this.$root.eventHub.$emit('inc', this.count += 1)
      }
    }
  }
</script>
