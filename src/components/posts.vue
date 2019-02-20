<template>
  <div class="container">
    <template v-for="item in post">
      <list :post="item" :key="item.create_time"></list>
    </template>
  </div>
</template>

<style scoped lang="scss">
  .container{
    width: 8rem;
    min-height: 4rem;
    margin: 0 auto;
  }
</style>

<script>
import list from './list'
export default {
  name: 'posts',
  data () {
    return {
      post: Array
    }
  },
  mounted () {
    this.axios.get('/api/getPosts')
      .then(response => {
        this.post = [...response.data]
        sessionStorage.setItem('len', response.data.length)
      })
  },
  components: {
    list
  },
  methods: {
    addUser () {
      this.axios.post('/api/user/addUser', {
        username: this.userName,
        age: this.age
      })
        .then((response) => {
          console.log(response)
        })
    }
  }
}
</script>
