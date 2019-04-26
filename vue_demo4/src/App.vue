<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--    给 Header 绑定事件监听  -->
      <!-- @事件监听用于父子组件间传递，不建议用于多层传递 -->
      <!--      <Header @addTodo="addTodo"></Header>-->
      <Header ref="head"></Header>
      <List :todos="todos"></List>
<!--      <Footer :todos="todos" :deleteCompletedTodos="deleteCompletedTodos" :selectAll="selectAll"></Footer>-->
<!--   使用 slot 插槽   -->
      <Footer>
        <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
        <span slot="count">已完成{{completeSize}} / 全部{{todos.length}} </span>
        <button slot="select" class="btn btn-danger" v-show="completeSize" @click="deleteCompletedTodos">清除已完成任务</button>
      </Footer>
    </div>
  </div>
</template>

<!--
绑定事件监听：订阅消息
触发事件：发布消息
-->

<script>
  import Pubsub from 'pubsub-js'
  import Footer from './components/TodoFooter'
  import Header from './components/TodoHeader'
  import List from './components/TodoList'

  import util from './util/StorageUtil'

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
        todos: util.readTodos()
      }
    },

    // 深度监视
    watch: {
      todos: {
        deep: true, // 开启深度监视
        // handler: function (newValue) {
        //   // 将最新的值，保存到 localStorage
        //   util.saveTodos(newValue)
        // }
        handler: util.saveTodos
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

    computed: {
      completeSize() {
        return this.todos.reduce( (preTotal, todo) => preTotal + (todo.complete? 1 : 0), 0)
      },
      isAllCheck:{
        get(){
          return this.completeSize===this.todos.length && this.todos.length > 0
        },
        set(value){ // value 是当前checkbox 的最新的值
          this.selectAll(value)
        }
      }
    },

    mounted() {
      // 执行异步代码
      // 给 Header 绑定 addTodo 事件监听
      // this.$on('addTodo', this.addTodo)// 给 App 绑定的监听
      this.$refs.head.$on('addTodo', this.addTodo)


      // 订阅消息
      Pubsub.subscribe('deleteTodo', (msg, index) => {
        console.log(msg)
        console.log(index)
        this.deleteTodo(index)
      })
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
