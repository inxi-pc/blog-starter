import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PostList from '@/components/PostList'
import PostEdit from '@/components/PostEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/postList',
      name: 'PostList',
      component: PostList
    },
    {
      path: '/postEdit/:id',
      name: 'PostEdit',
      component: PostEdit,
      props: true
    }
  ]
})
