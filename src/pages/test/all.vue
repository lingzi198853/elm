<template>
<div>
  <brother></brother>
  <sister></sister>
</div>
</template>

<script>
  import sister from './sister.vue'
  import brother from './brother.vue'
  export default {
    components: {
      sister,
      brother
    }
  }
</script>
