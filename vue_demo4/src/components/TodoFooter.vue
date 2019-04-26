<template>
  <div class="todo-footer">
    <label>
<!--      <input type="checkbox" v-model="isAllCheck"/>-->
      <slot name="checkAll">

      </slot>
    </label>
    <span>
<!--          <span>已完成{{completeSize}}/ 全部{{todos.length}} </span> -->
    <slot name="count">

      </slot>
        </span>

<!--    <button class="btn btn-danger" v-show="completeSize" @click="deleteCompletedTodos">清除已完成任务</button>-->
      <slot name="select">
      </slot>
  </div>
</template>

<script>
  export default {
  //   使用了 slot 插槽，所有属性都需要在父组件中定义，此时当前组件已经没有所需数据了
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
