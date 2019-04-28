<template>
  <ul class="todo-main">
    <Item v-for="(item, index) in todos" :index="index" :item="item"></Item>
  </ul>
</template>

<script>

  import storageUtil from '../util/StorageUtil'

  import Item from './TodoItem.vue'
  import {mapState} from 'vuex'

  export default {
    components: {
      Item
    },
    computed: {
      ...mapState(['todos'])
    },
    watch: {
      todos: {
        deep: true,
        handler : storageUtil.saveTodos
      }
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
