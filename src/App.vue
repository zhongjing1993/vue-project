<!--
app.vue是我们的主组件，所有页面都是在App.vue下进行切换的，由于app.vue在所有页面都有，我们在app.vue
上写一些初始化全局的方法
-->
<template>
  <div id="app">
    <com-header></com-header>
    <router-view></router-view>
    <com-data></com-data>
    <com-footer></com-footer>
  </div>
</template>

<script>
  import Header from './components/header.vue'
  import Footer from './components/footer.vue'
  import datapaker from './components/datapacker.vue'
export default {
    name: 'app',
    components: {
      comHeader: Header,
      comFooter: Footer,
      comData:datapaker
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
  margin-top: 60px;
}
* {
  padding:0;
  margin:0;
  list-style:none;
}
a {
  text-decoration:none;
}
</style>
