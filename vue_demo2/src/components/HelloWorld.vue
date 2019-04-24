<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
  export default {
    // 配置对象，与 Vue 一致
    data() { // 必须写函数
      return {
        msg: "hello Vue Component!"
      }
    }
  }
</script>

<style>

  .msg {
    color: red;
    font-size: 30px;
  }

</style>
