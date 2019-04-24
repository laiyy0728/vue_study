/*
入口 JS, 创建 Vue 实例
 */
// 1、引入 js
import Vue from 'vue'
import App from './App.vue'

new Vue({
  // 2、el 指定的是 index.html 的 id
  el: '#app',
  components: {
    // 3、 映射组件名
    App
  },
  template: '<App/>'
});
