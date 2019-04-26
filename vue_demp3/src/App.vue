<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"></Header>
      <List :todos="todos" :deleteTodo="deleteTodo"></List>
      <Footer :todos="todos" :deleteCompletedTodos="deleteCompletedTodos" :selectAll="selectAll"></Footer>
    </div>
  </div>
</template>

<script>
  import Footer from './components/TodoFooter'
  import Header from './components/TodoHeader'
  import List from './components/TodoList'

  export default {

    data() {
      return {
        // 1、初始化
        // todos: [
        //   {title: '吃饭', complete: false},
        //   {title: '睡觉', complete: false},
        //   {title: '打游戏', complete: true},
        //   {title: 'coding', complete: false},
        // ]

        // 2、缓存
        // 从 localstorage 中读取 todos
        todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
      }
    },

    // 深度监视
    watch: {
      todos: {
        deep: true, // 开启深度监视
        handler: function (newValue) {
          // 将最新的值，保存到 localStorage
          window.localStorage.setItem('todos_key', JSON.stringify(newValue))
        }
      }
    },

    methods: {
      addTodo(todo) {
        this.todos.unshift(todo)
      },
      deleteTodo(index) {
        this.todos.splice(index, 1)
      },
      deleteCompletedTodos() {
        // 删除所有选中的
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      selectAll(isSelectAll) {
        // 全选、全不选
        this.todos.forEach(todo => todo.complete = isSelectAll)
      }
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
