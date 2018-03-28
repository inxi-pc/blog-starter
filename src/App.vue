<template>
  <div id="app">
    <div class="header">
      <Header></Header>
    </div>
    <div class="sidebar">
      <Sidebar></Sidebar>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  border: 1px solid;
}
.sidebar {
  width: 20%;
  height: 500px;
  display: block;
  float: left;
  border: 1px solid;
}
.content {
  width: 79%;
  height: 500px;
  float: left;
  border: 1px solid;
}
</style>
