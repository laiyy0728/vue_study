<template>
  <ul class="todo-main">
    <Item v-for="(item, index) in todos" :index="index" :item="item"></Item>
  </ul>
</template>

<script>

  import Item from './TodoItem.vue'

  export default {
    props: {
      todos: Array,
    },
    components: {
      Item
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
