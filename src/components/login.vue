<template>
<div>
  <div class="shadow"></div>
  <div class="login">
    <span>Login<i class="iconfont icon-guanbi" @click="close"></i></span>
    <form>
      <input placeholder="用户名" v-model="username"><br>
      <input placeholder="密码" type="password" v-model="password"><br>
      <input type="button" value="Login In" @click="checkUser">
    </form>
  </div>
  <alertBox :option="option" v-if="option.show" @hide="option.show=false"></alertBox>
</div>
</template>

<style lang="scss" scoped>
  .shadow{
    width: 100%;
    height: 100%;
    background: #aaa;
    opacity: 0.4;
    color: black;
    position: absolute;
    top: 0;
    left: 0;
  }
  .login{
    width: 3.6rem;
    height: 2.5rem;
    position: absolute;
    left:50%;
    top:50%;
    margin-left:-1.8rem;
    margin-top:-2rem;
    z-index:99999;
    background: #fff;
    border: 2px solid #1b998b;
    border-radius: 6px 6px;
    opacity:1;
    span{
      background: #1b998b;
      display: inline-block;
      width: 100%;
      font-size: 0.16rem;
      height: 0.4rem;
      line-height: 0.4rem;
      font-weight: 600;
      text-align: left;
      text-indent: 0.2rem;
      color: #fff;

      i{
        float: right;
        padding-right: 0.15rem;
        cursor: pointer;
        font-weight: 500;
      }
    }
    form{
      padding: 0.2rem;
      color:#606266;

      input{
        width: 2.5rem;
        margin: 0.1rem 0;
        border: 1px solid #1b998b;
        border-radius: 4px;
        background-image: none;
        height: 0.3rem;
        line-height: 0.3rem;
        text-indent: 0.1rem;
      }

      input:last-child {
        background-color: #1b998b;
        opacity: 0.7;
        outline: none;
        cursor: pointer;
        color: #fff;
      }
      input:last-child:hover{
        opacity: 1;
      }
    }
  }
</style>

<script>
import alertBox from './alertBox'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      option: {
        'msg': '',
        'show': false
      }
    }
  },
  components: {
    alertBox
  },
  methods: {
    close () {
      this.$emit('closeBox')
    },
    checkUser () {
      this.axios.post('/api/user/checkUser', {
        username: this.username,
        password: this.password
      })
        .then((response) => {
          if (response.data) {
            this.$router.push({name: 'addPost'})
            sessionStorage.setItem('user', this.username)
            this.close()
          } else {
            this.option.msg = '对不起，暂时只对管理员开放！'
            this.option.show = true
          }
        })
    }
  }
}
</script>
