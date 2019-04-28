<template>
  <div>
    <p>点击了 {{$store.state.count}} 次，次数是 {{evenOrAdd}} </p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOfOdd">如果是奇数，添加</button>
    <button @click="incrementAsync">异步添加</button>
  </div>
</template>

<script>

  // mapGetters 返回一个对象，对象中有 evenOrAdd 方法
  import {mapState, mapActions, mapGetters} from 'vuex'

  export default {
    name: 'App',
    computed: {
      // evenOrAdd() {
      //   return this.$store.getters.evenOrAdd
      // }
      ...mapState(['count']),
      ...mapGetters(['evenOrAdd'])
    },
    methods: {
      ...mapActions(['increment', 'decrement', 'incrementOfOdd', 'incrementAsync'])
      // increment(){
      //   this.$store.dispatch('increment') // 触发 store 中的对应的 action 调用
      // },
      // decrement(){
      //   this.$store.dispatch('decrement')
      // },
      // incrementOfOdd(){
      //   this.$store.dispatch('incrementOfOdd')
      // },
      // incrementAsync(){
      //   this.$store.dispatch('incrementAsync')
      // }

    }
  }
</script>

<style>
</style>
