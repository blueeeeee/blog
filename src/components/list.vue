<template>
    <div class="list">
        <span>{{date}}</span>
        <router-link :to = "{name: 'onepost',params: { postId: post.post_id }}"><p>{{postname}}</p></router-link>
    </div>
</template>

<style lang="scss" scoped>
.list{
    width:100%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
    color: #999;
    margin-bottom:0.4rem;

    span{
      display: inline-block;
      font-family: Arial;
      font-size: 0.16rem;
      padding-right: 20px;
    }
    p{
      color: #666;
      font-size: 0.24rem;
      display: inline-block;
      padding: 0 10px;
    }

}
.list:hover {
  color: #1b998b;
  border-bottom: 2px solid #1b998b;
  transition: 0.5s;
  p{
    color: #1b998b;
  }
}
</style>

<script>
export default {
  name: 'list',
  data () {
    return {
      postname: this.post.post_name
    }
  },
  props: {
    post: Object
  },
  computed: {
    date () {
      let time = new Date(this.post.create_time)
      return time.toDateString()
    }
  }
}
</script>
