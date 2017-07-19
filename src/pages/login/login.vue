<template>
  <div>
    <loginheader title="登录"></loginheader>
    <div class="App-2KuIB">
      <form class="MessageLogin-2Z-d6">
        <section class="MessageLogin-FsPlX">
          <input type="tel" maxlength="11" placeholder="手机号" v-model="phoneNumber">
          <button :disabled="isDisabled" class="CountButton-3e-kd" @click.prevent="getVerifyCode">
            获取验证码
          </button>
        </section>
        <section class="MessageLogin-FsPlX">
          <input type="tel" maxlength="8" placeholder="验证码" v-model="vertifyCode">
        </section>
      </form>
      <section class="MessageLogin-15xD9">
        温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意<a href="//h5.ele.me/service/agreement/" target="_blank">《用户服务协议》</a></section>
      <button class="SubmitButton-2wG4T" @click="checkPhoneNumber(phoneNumber)">
        登录
      </button>
    </div>
    <div class="App-3T916"><span>关于我们</span></div>
    <hint v-show="toggleHint" :hintText="hintText"></hint>
  </div>
</template>
<script>
  import header from '@/components/header/subheader'
  import hint from '@/components/hint/hint'
  import { checkLoginData, getVerifyData, postVerifyData } from '@/pages/service/getLoginData'
  // import { postLoginData } from '@/util/cookies'

  export default {
    data () {
      return {
        toggleHint: false,
        hintText: null,
        phoneNumber: null,
        vertifyCode: null,
        login: null,
        userId: null,
        validate_token: null,
        userInfo: null
      }
    },
    mounted () {
      this.checkLogin()
    },
    computed: {
      isDisabled: function () {
        return !(/^1[34578]\d{9}$/g.test(this.phoneNumber))
      }
    },
    methods: {
      async checkLogin () {
        await checkLoginData().then(res => {
          if (res === 0) {
            this.login = false
          } else {
            this.login = true
            this.userId = res
          }
        })
      },
      async getVerifyCode () {
        await getVerifyData(this.phoneNumber, 'mobile').then((res) => {
          if (res.is_exists) {
          }
        })
        let res = await postVerifyData(this.phoneNumber)
        this.validate_token = res.data.validate_token
      },
      async checkPhoneNumber (number) {
        let reg = /^1\d{10}$/gi.test(this.phoneNumber)
        if (!number || !reg) {
          this.toggleHint = true
          this.hintText = '请填写合法的手机号'
          setTimeout(() => {
            this.toggleHint = false
          }, 2000)
        } else if (!this.vertifyCode || !(/^\d{6}$/gi.test(this.vertifyCode))) {
          this.toggleHint = true
          this.hintText = '请填写验证码'
          setTimeout(() => {
            this.toggleHint = false
          }, 2000)
        } else {
          console.log(this.validate_token)
          console.log(this.phoneNumber)
          console.log(this.vertifyCode)
          // this.userInfo = await postLoginData(this.phoneNumber, this.vertifyCode, this.validate_token)
          // setCookie('USERID', this.userId)
          this.$router.push('/profile')
        }
      }
    },
    components: {
      loginheader: header,
      hint
    }
  }
</script>
<style scoped>
  @import '../../style/login.css';
</style>
