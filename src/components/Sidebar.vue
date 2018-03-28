<template>
  <div>
    <h1>Nav</h1>
    <ul>
        <li><router-link :to="{ name: 'PostList' }">PostList</router-link></li>
        <li><router-link :to="{ name: 'HelloWorld' }">HelloWorld</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
