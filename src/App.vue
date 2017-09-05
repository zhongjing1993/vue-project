<!--
app.vue是我们的主组件，所有页面都是在App.vue下进行切换的，由于app.vue在所有页面都有，我们在app.vue
上写一些初始化全局的方法
-->
<template>
  <div id="app">
    <com-header></com-header>
    <router-view></router-view>
    <com-index></com-index>
    <!-- 这个是引用element文件 -->
    <!-- <com-data></com-data> -->
    <com-footer></com-footer>
  </div>
</template>

<script>
  import Header from './components/header.vue'
  import Footer from './components/footer.vue'
  // 这个是引用element文件
  // import datapaker from './components/datapacker.vue'
  import index from './page/home/index.vue'
  export default {
      data () {
        return{

        }
      },
      components: {
            comHeader: Header,
            comFooter: Footer,
            // 这个是引用element文件
            // comData:datapaker,
            comIndex:index,
      }
      
  }
      
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
* {
  padding:0;
  margin:0;
  list-style:none;
  font-family: "微软雅黑";
}
a {
  text-decoration:none;
}
</style>
