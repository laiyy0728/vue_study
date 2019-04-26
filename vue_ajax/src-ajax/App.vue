<template>
  <div v-if="!repoUrl">loading</div>
  <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
</template>

<script>

  import axios from 'axios'

  export default {
    data() {
      return {
        repoUrl: '',
        repoName: ''
      }
    },
    mounted() {
      const url = 'https://api.github.com/search/repositories?q=vu&sort=stars';
      const url2 = 'https://api.github.com/search/users?q=aa';

      // 使用 vue-resource ajax 请求
      // 发送 ajax 请求，获取数据
      // this.$http.get(url).then(response => {
      //   const result = response.data;
      //   // 得到第一个 repo
      //   const repo = result.items[0];
      //   this.repoUrl = repo.html_url;
      //   this.repoName = repo.name;
      // }, error => {
      //   alert('请求失败！')
      // })

      // 使用 axios ajax 请求
      axios.get(url).then(response => {
        const result = response.data;
        //   // 得到第一个 repo
        const repo = result.items[0];
        this.repoUrl = repo.html_url;
        this.repoName = repo.name;
      }).catch(error => {
        alert('请求失败！')
      })
    }
  }
</script>

<style>
</style>
