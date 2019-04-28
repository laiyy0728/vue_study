<template>
  <div class="todo-header">
    <input type="text" v-model="title" @keyup.enter="add" placeholder="请输入你的任务名称，按回车键确认"/>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        title: '' // 组件内部使用，不存在共享问题，不需要使用 vuex
      }
    },
    methods: {
      add(){
        // 1、检查输入的合法性
        const title = this.title.trim();
        if (!title) {
          alert('必须输入！')
          return
        }

        // 2、根据输入，生成一个 todo 对象
        const todo = {
          title: this.title,
          complete: false
        }

        // 3、添加到 todos
        // todos 使用 vuex 管理
        this.$store.dispatch('addTodo', todo)

        // 4、清除输入
        this.title = ''
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
