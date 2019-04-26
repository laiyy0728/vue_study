<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对 Vue 的评论</h1>
          </div>
        </div>
      </div>
    </header>

<!-- 组件间通信 -->
    <Add :addComment="addComment"></Add>
    <List :comments="comments" :delComment="delComment"></List>
  </div>
</template>


<script>
  // 1、引入组件
  import Add from './components/Add.vue'
  import List from './components/List.vue'

  export default {

    data() {
      return {
        // 数据在哪个组件，操作数据的行为（方法、函数）就应该定义在哪个组件
        comments: [
          {name: '张三', content: 'Vue 哈哈哈'},
          {name: '李四', content: 'Vue 嘿嘿嘿'},
          {name: '王五', content: 'Vue哟哟哟'},
        ]
      }
    },

    methods: {
      addComment(comment){
        this.comments.unshift(comment)
      },
      delComment(index) {
        this.comments.splice(index, 1)
      }
    },

    components: {
      Add,
      List
    }
  }


</script>

<style>
  .logo{
    width: 200px;
    height: 200px;
  }
</style>
