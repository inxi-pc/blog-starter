<template>
  <tr>
    <td>{{ post.id }}</td>
    <td>{{ post.content }}</td>
    <td><button v-on:click="toEditPost">edit</button></td>
  </tr>
</template>

<script>
export default {
  name: 'PostRow',
  props: [
    'post'
  ],
  data () {
    return {
      
    }
  },
  methods: {
    toEditPost() {
      this.$router.push({ name: 'PostEdit', params: { id: this.post.id } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
