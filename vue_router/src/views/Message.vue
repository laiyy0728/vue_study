<template>
  <div>
    <ul>
      <li v-for="item in messages" :key="item.id">
        <router-link :to="`/home/message/detail/${item.id}`">{{item.msg}}</router-link>
        <button @click="pushShow(item.id)">push查看</button>
        <button @click="replaceShow(item.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "Message",
    data() {
      return {
        messages: []
      }
    },
    mounted() {
      // 模拟 ajax 请求
      setTimeout(() => {
        const messages = [
          {id:1, msg:'message01'},
          {id:2, msg:'message02'},
          {id:3, msg:'message03'},
        ]
        this.messages = messages
      }, 1000);
    },
    methods: {
      pushShow(id) {
        this.$router.push(`/home/message/detail/${id}`)
      },
      replaceShow(id){
        this.$router.replace(`/home/message/detail/${id}`)
      }
    }
  }
</script>

<style scoped>

</style>
