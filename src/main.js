// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//  main.js入口文件，主要作用是初始化vue实例并使用需要的插件
//  vue.config.productionTip为false启动时会生成生产提示
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
//  创建一个app实例，并且挂载到选择符#app匹配的元素上，在根目录的HTML中

Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
  //render: h => h(app)
})
//.$mount("#app");
