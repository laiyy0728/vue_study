<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header/>
      <List/>
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Footer from './components/TodoFooter'
  import Header from './components/TodoHeader'
  import List from './components/TodoList'

  export default {

    mounted() {
      // 异步获取数据，保存 todos 数据并显示
      // 发送命令给 action
      this.$store.dispatch('reqTodos')
    },

    components: {
      Footer,
      Header,
      List
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
