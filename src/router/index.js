import Vue from 'vue'
import Router from 'vue-router'
import posts from '@/components/posts'
import addPost from '@/components/addPost'
import onepost from '@/components/onepost'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'posts',
      component: posts
    },
    {
      path: '/addPost',
      name: 'addPost',
      component: addPost
    },
    {
      path: '/onepost',
      name: 'onepost',
      component: onepost
    }
  ]
})
