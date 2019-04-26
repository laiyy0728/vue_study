<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
  import Pubsub from 'pubsub-js'

    export default {
      data(){
        return {
          searchName: ''
        }
      },
      methods: {
        search(){
          const searchName = this.searchName.trim();
          // 发布搜索消息
          if (searchName) {
            Pubsub.publish('search', searchName)
          }
        }
      }
    }
</script>

<style scoped>

</style>
