<template>
  <div>
    <ul>
      <li v-for="(item, index) in news" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "News",
    data() {
          return {
            news: [
              'news01',
              'news02',
              'news03'
            ]
          }
    }
  }
</script>

<style scoped>

</style>
