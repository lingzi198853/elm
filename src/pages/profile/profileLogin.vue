<template>
  <section>
    <div class="profile-3g0uv" @click="clickHandler"><span class="profile-1gjgY"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use></svg></span>
      <div class="profile-xfCcC">
        <p class="profile-1_mtk">登录/注册</p>
        <p class="profile-1UP72">
          <svg fill="#fff">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use>
          </svg><span>登录后享受更多特权</span>
        </p>
      </div><span class="profile-2XuMq"><svg fill="#fff"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg></span></div>
  </section>
</template>
<script>
  import { getUserData } from '@/pages/service/getLoginData'
  export default {
    props: {
      login: Boolean,
      userId: Number
    },
    mounted () {
      this.initData()
    },
    methods: {
      initData () {
        if (this.userId) {
          getUserData(this.userId).then(res => {
            console.log(res.data)
          })
        }
      },
      clickHandler () {
        if (this.login) {
          console.log('登录')
        } else {
          this.$router.push('/login')
        }
      }
    }
  }
</script>
