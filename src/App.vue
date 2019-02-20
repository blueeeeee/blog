<template>
  <div id="app">
    <div class="header">
      <router-link :to = "{name: 'posts'}">
        <img src="./assets/head.jpg"/>
      </router-link>
      <ul>
        <li><router-link :to = "{name: 'posts'}"><i class="iconfont icon-shouye"></i></router-link></li>
        <li><a @click="showIf"><i class="iconfont icon-yonghu"></i></a></li>
        <!--<li><router-link :to = "{name: 'posts'}"><i class="iconfont icon-feiji"></i></router-link></li>-->
        <li><a href = "https://github.com/blueeeeee" target="new_blank"><i class="iconfont icon-github"></i></a></li>
      </ul>
    </div>
    <router-view/>
    <transition name="slide-fade">
      <login @closeBox="close" v-show="loginShow"></login>
    </transition>
  </div>
</template>

<script>
import login from './components/login'
export default {
  name: 'App',
  data () {
    return {
      loginShow: false
    }
  },
  components: {
    login: login
  },
  methods: {
    close () {
      this.loginShow = false
    },
    /* 检查是否登录，若登录进入博文编辑页面 */
    showIf () {
      if (sessionStorage.getItem('user')) {
        this.loginShow = false
        this.$router.push({name: 'addPost'})
      } else {
        this.loginShow = true
      }
    }
  }
}
</script>

<style lang="scss">
html,body,ul,li,span,p,a,span{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
  color:#A9A9A9;
  color: #000;
}
a:hover,a:active{
  color:#1b998b;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0.14rem;
  width: 100%;
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-leave-active {
    transition: all .4s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
  {
    opacity: 0;
  }
  .header{
    width:100%;
    margin:0.2rem;
    text-align: center;
    max-height: 1.5rem;

    img{
      width:64px;
      height:64px;
      border-radius: 50%;
    }

    ul{
      width:100%;
      text-align: center;
      margin-top: 0.1rem;

      li{
        display: inline-block;
        padding: 0.08rem;
        font-weight: 500;

        i{
          font-size: 0.18rem;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
