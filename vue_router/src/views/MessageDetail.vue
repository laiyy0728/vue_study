<template>
  <ul>
    <li>id: {{$route.params.id}}</li>
    <li>title: {{detail.title}}</li>
    <li>content: {{detail.content}}</li>
  </ul>
</template>

<script>
  const messageDetails = [
    {id:1, title: 'Message01', content: 'Message01 Content...'},
    {id:2, title: 'Message02', content: 'Message02 Content...'},
    {id:3, title: 'Message03', content: 'Message03 Content...'},
  ]

  export default {
    name: "MessageDetail",
    data(){
      return {
        detail: {}
      }
    },
    mounted() { // 改变当前路由组件参数数据时，不会重新创建组件对象，mounted 不会重新执行
      const id = this.$route.params.id
      this.detail = messageDetails.find(detail => detail.id === id*1)
    },
    watch:{
      $route: function () { // 当改变当前路由组件参数时，自动调用
        console.log("调用 $route")
        const id = this.$route.params.id
        this.detail = messageDetails.find(detail => detail.id === id*1)
      }
    }
  }
</script>

<style scoped>

</style>
