<template>
    <div class="main" v-if="this.$route.params.postId">
      <h1>{{name}}</h1>
      <h3>{{date}}</h3>
      <vue-markdown :source="content"></vue-markdown>
      <div class="right" @click=getOne(++cid)><span>NEXT</span><i class="iconfont icon-prev"></i></div>
      <div class="left" @click=getOne(--cid)><i class="iconfont icon-next"></i><span>PREV</span></div>
      <alertBox :option="option" v-if="option.show" @hide="option.show=false"></alertBox>
    </div>
</template>
<style scoped lang="scss">
  .main{
    width: 6rem;
    text-align: left;
    h1{
      margin-top: 0;
      margin-bottom: 0.45rem;
      font-size: 32px;
      letter-spacing: 1px;
    }
    h3{
      color: #999;
      font-size: 12px;
      letter-spacing: 1px;
      margin: 0 0 30px;
    }
    .left,.right{
      position: fixed;
      font-size: 0.22rem;
      font-weight: 700;
      color: #999;
      bottom: 0.2rem;
      cursor: pointer;
    }
    .left{
      left: 0.2rem;
    }
    .right{
      right: 0.2rem;
    }
    .left:hover,.right:hover{
      color: #1b998b;
    }
  }
</style>
<script>
import alertBox from './alertBox'
import VueMarkdown from 'vue-markdown'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
export default {
  name: 'onepost',
  data () {
    return {
      name: '',
      date: '',
      content: '',
      cid: 0,
      option: {
        'msg': '',
        'show': false
      }
    }
  },
  created () {
    if (this.$route.params.postId) {
      this.cid = parseInt(this.$route.params.postId)
      this.getOne(this.$route.params.postId)
    }
  },
  updated () {
    let blocks = document.querySelectorAll('pre code')
    blocks.forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  components: {
    VueMarkdown,
    alertBox
  },
  methods: {
    getOne (id) {
      let len = sessionStorage.getItem('len')
      if (id > 0 && id <= len) {
        this.axios.get('/api/getOne', {params: { postId: id }})
          .then(response => {
            this.name = response.data[0].post_name
            var time = new Date(response.data[0].create_time)
            this.date = time.toDateString()
            this.content = response.data[0].post_content
          })
      } else {
        console.log(id)
        if (id <= 0) {
          this.cid = 1
        } else if (id > len) {
          this.cid = len
        }
        this.option.msg = '已经没有更多的文章啦！'
        this.option.show = true
      }
    }
  }
}
</script>
