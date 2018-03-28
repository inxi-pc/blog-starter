<template>
  <div>
    <h1>Post list</h1>
    <div class="postList">
      <table class="postListTable" border="1px">
        <PostRow v-for="post in posts" :key="post.id" v-bind:post="post"></PostRow>
      </table>
    </div>
  </div>
</template>

<script>
import PostRow from '@/components/PostRow'

export default {
  name: 'PostList',
  components: {
    PostRow
  },
  data () {
    var posts = [1, 2, 3, 4, 5].map(element => {
      return {
        'id': element,
        'content': 'test'
      }
    });
    console.log(posts);
    return {
      posts: posts
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  float: left;
}
.postListTable {
  width: 100%;
}
</style>
